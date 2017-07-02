import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL,
  REMOVE_PERSON
} from '../constants/people_constants'

const initialState = {
  query: '',
  people: [],
  error: '',
  loading: false
};

export default function people(state = initialState, action) {
  switch(action.type) {
    case GET_PEOPLE_REQUEST:
      return { ...state, query: action.payload, loading: true };
    case GET_PEOPLE_SUCCESS:
      return { ...state, people: action.payload, loading: false };
    case GET_PEOPLE_FAIL:
      return { ...state, error: action.payload.message, loading: false };
    case REMOVE_PERSON:
      return { ...state, people: state.people.filter(person => person.uid !== action.payload) };
    default:
      return state;
  }
}
