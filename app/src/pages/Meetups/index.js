import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {format} from 'date-fns';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import Topbar from '~/components/Topbar';

import {Container, Title, List} from './styles';
import api from '~/services/api';

function Meetups({isFocused}) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadmeetups() {
      setPage(1);
      const subs = await api.get('subscriptions');
      const finalSubs = subs.data.map(sub => sub.id);
      setSubscriptions(finalSubs);

      const response = await api.get('meetups', {
        params: {page: 1},
      });

      const meet = response.data.filter(function(e) {
        return this.indexOf(e.id) < 0;
      }, finalSubs);

      setMeetups(meet);
    }

    if (isFocused) {
      loadmeetups();
    }
  }, [isFocused]);

  async function handleLoadMore() {
    const newPage = page + 1;
    setPage(newPage);

    const response = await api.get('meetups', {
      params: {page: newPage},
    });

    const newMeetups = [...meetups, ...response.data];

    setMeetups(newMeetups);
  }

  async function handleSubscribe(id) {
    try {
      await api.post(`meetups/${id}/subscriptions`);
      const newMeetups = meetups.filter(meetup => !(meetup.id === id));

      setMeetups(newMeetups);
    } catch (e) {
      Alert.alert(
        'Error',
        'You cannot subscribe to two Meetups at the same date and time',
      );
    }
  }

  return (
    <Background>
      <Topbar />
      <Container>
        <Title>{format(new Date(), "do 'of' MMMM")}</Title>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Meetup onCancel={() => handleSubscribe(item.id)} data={item} />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Meetups);
