import {
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL
} from '../constants/vkdb_const'

const VK = window.VK;

export function getCountries() {
  return function(dispatch) {
    VK.Api.call('database.getCountries',{ need_all: 1, count: 250 } ,(res) => {
      if(res) {
        const countries = res.response;

        dispatch({
          type: GET_COUNTRIES_SUCCESS,
          payload: countries
        });

      } else {
        dispatch({
          type: GET_COUNTRIES_FAIL,
          payload: new Error('Error request database.getCountries')
        });
      }

    });

  }
}

export function getCities(countryId, query = '') {
  return function(dispatch) {
    VK.Api.call('database.getCities', { count: 1000, country_id: countryId, q: query}, (res) => {
      if(res) {
        const cities = res.response;

        dispatch({
          type: GET_CITIES_SUCCESS,
          payload: cities
        });

      } else {
        dispatch({
          type: GET_CITIES_FAIL,
          payload: new Error('Error request database.getCities')
        });
      }

    });

  }
}
