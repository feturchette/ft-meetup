export function meetupSelect(meetup) {
  return {
    type: "@user/MEETUP_SELECT",
    payload: { meetup }
  };
}
