import {
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL
} from '../constants/vkdb_const'

const initialState = {
  countries: [],
  cities: [],
  errorCountry: '',
  errorCity: ''
};

export default function vkdb(state = initialState, action) {
  switch(action.type) {
    case GET_COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload };
    case GET_COUNTRIES_FAIL:
      return { ...state, errorCountry: action.payload };
    case GET_CITIES_SUCCESS:
      return { ...state, cities: action.payload };
    case GET_CITIES_FAIL:
      return { ...state, errorCity: action.payload };
    default:
      return state;
  }
}
