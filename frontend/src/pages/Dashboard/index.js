import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { useDispatch } from "react-redux";

import api from "~/services/api";
import history from "~/services/history";
import { meetupSelect } from "~/store/modules/meetup/actions";
import { Container, Meetup } from "./styles";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();

  function handleNewMeetup() {
    dispatch(meetupSelect(null));
    history.push("meetup");
  }

  function handleViewMeetup(meetup) {
    dispatch(meetupSelect(meetup));
    history.push(`meetup/${meetup.id}`);
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get("owner");
      setMeetups(response.data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>My meetups</h1>
        <button onClick={handleNewMeetup} type="button">
          New meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup
            onClick={() => handleViewMeetup(meetup)}
            key={meetup.title}
            past={meetup.past}
            available={!meetup.meetup}
          >
            <strong>{meetup.title}</strong>
            <span>
              {format(parseISO(meetup.date), "do 'of' MMMM 'at' HH'h'")}
            </span>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
