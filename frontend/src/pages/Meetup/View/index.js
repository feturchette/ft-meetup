import React from "react";
import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import { Container, Banner, Footer } from "./styles";
import history from "~/services/history";
import api from "~/services/api";

export default function View() {
  const selected = useSelector(state => state.meetup.selected);

  if (!selected) {
    history.push("/");
  }

  async function handleCancelMeetup() {
    await api.delete(`meetups/${selected.id}`);
    history.push("/");
  }

  return (
    <Container>
      <header>
        <h1>{selected && selected.title}</h1>
        <div>
          <button
            onClick={() => history.push("/meetup")}
            className="edit"
            type="button"
          >
            Edit
          </button>
          <button onClick={handleCancelMeetup} className="cancel" type="button">
            Cancel
          </button>
        </div>
      </header>

      <Banner src={selected && selected.File.url} />
      <p>{selected && selected.description}</p>

      <Footer>
        <small>
          {selected &&
            format(parseISO(selected.date), "do 'of' MMMM 'at' HH'h'")}
        </small>
        <small>{selected && selected.location}</small>
      </Footer>
    </Container>
  );
}
