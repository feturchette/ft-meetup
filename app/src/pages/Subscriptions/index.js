import React, {useEffect, useState} from 'react';
import {withNavigationFocus} from 'react-navigation';

import Background from '~/components/Background';
import Topbar from '~/components/Topbar';
import Meetup from '~/components/Meetup';

import {Container, List} from './styles';
import api from '~/services/api';

function Subscriptions({isFocused}) {
  const [meetups, setMeetups] = useState([]);

  async function loadmeetups() {
    const response = await api.get('subscriptions');

    setMeetups(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadmeetups();
    }
  }, [isFocused, meetups]);

  async function handleCancel(id) {
    await api.delete(`subscriptions/${id}`);

    setMeetups(meetups.filter(meetup => !(meetup.id === id)));
  }

  return (
    <Background>
      <Topbar />
      <Container>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Meetup
              cancel
              onCancel={() => handleCancel(item.id)}
              data={item.Meetup}
            />
          )}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Subscriptions);
