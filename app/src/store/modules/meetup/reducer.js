import produce from "immer";

const INITIAL_STATE = {
  selected: null
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@user/MEETUP_SELECT": {
        if (!action.payload.meetup) {
          draft.selected = null;
        } else {
          draft.selected = { ...action.payload.meetup };
        }
        break;
      }
      default:
    }
  });
}
