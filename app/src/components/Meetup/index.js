import React, {useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import {Container, Avatar, Info, Name, Time, SubmitButton} from './styles';

export default function Meetup({cancel, data, onCancel}) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "do 'of' MMMM 'at' HH'h'");
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Avatar
        source={{
          uri: data.File
            ? data.File.url
            : `https://api.adorable.io/avatar/300/teste.png`,
        }}
      />
      <Name>{data.title}</Name>
      <Info>
        <Time>{dateParsed}</Time>
        <Time>{data.location}</Time>
        <Time>Host: {data.User.name}</Time>
      </Info>

      <SubmitButton onPress={onCancel}>
        {!cancel ? 'Subscribe' : 'Cancel Subscription'}
      </SubmitButton>
    </Container>
  );
}
