import {
  CLONE_PEOPLE,
  GET_PAIR,
  UPDATE_LADDER,
  MAKE_LOG,
  CLEAR_LOG
} from '../constants/vkvote_const'

import updatePeople from '../helpers/updatePeople'

const initialState = {
  peopleVote: [],
  pair: [],
  logs: []
};

export default function vkvote(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case CLONE_PEOPLE:
      return { ...state, peopleVote: action.payload };
    case GET_PAIR:
      return { ...state, pair: action.payload };
    case UPDATE_LADDER:
      return { ...state, peopleVote: updatePeople(action.payload.winer, action.payload.loser, state.peopleVote) };
    case MAKE_LOG:
      return { ...state, logs: state.logs.concat(action.payload) };
    case CLEAR_LOG:
      return { ...state, logs: [] };
    default:
      return state;
  }
}
