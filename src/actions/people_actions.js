import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL,
  REMOVE_PERSON
} from '../constants/people_constants'

const VK = window.VK;

export function getPeople(fields) {
  return function(dispatch) {
    dispatch({
      type: GET_PEOPLE_REQUEST,
      payload: fields.q
    });

    getUsers(fields, dispatch);
  }
}

export function removePerson(id) {
  return {
    type: REMOVE_PERSON,
    payload: id
  }
}

function getUsers(fields, dispatch) {
  VK.Api.call('users.search',fields, (res) => {
    if(res) {
      let users = res.response;
      //delete first because its num of users
      if(users) {
        users.shift();
      }


      dispatch({
        type: GET_PEOPLE_SUCCESS,
        payload: users
      });

    } else {
      dispatch({
        type: GET_PEOPLE_FAIL,
        payload: new Error('Error request people users.search')
      });
    }
  });
}
