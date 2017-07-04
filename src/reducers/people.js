import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL,
  REMOVE_PERSON,
  SET_OFFSET,
  // GET_PEOPLE_OFFSET_REQUEST,
  GET_OFFSET_PEOPLE_SUCCESS,
  GET_OFFSET_PEOPLE_FAIL
} from '../constants/people_constants'

const initialState = {
  query: '',
  people: [],
  error: '',
  offsetNum: 20,
  errorOffset: '',
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
    case SET_OFFSET:
      return { ...state, offsetNum: action.payload };
    // case GET_PEOPLE_OFFSET_REQUEST:
    //   return { ...state, offsetNum: action.payload };
    case GET_OFFSET_PEOPLE_SUCCESS:
      return { ...state, people: [ ...state.people, ...action.payload ], offsetNum: state.offsetNum + 10 };
    case GET_OFFSET_PEOPLE_FAIL:
      return { ...state, errorOffset: action.payload };
    default:
      return state;
  }
}
