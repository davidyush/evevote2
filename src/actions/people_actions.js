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

export function offsetPeople(fields, offsetNum, offsetCount) {
  return function(dispatch) {
    // dispatch({
    //   type: GET_PEOPLE_OFFSET_REQUEST,
    //   payload: offsetNum
    // });


    VK.Api.call('users.search', { ...fields, offset: offsetNum, count: offsetCount }, (res) => {
      if(res) {
        let users = res.response;
        if(users) {
          users.shift();
        }

        dispatch({
          type: GET_OFFSET_PEOPLE_SUCCESS,
          payload: users
        });

      } else {
        dispatch({
          type: GET_OFFSET_PEOPLE_FAIL,
          payload: new Error('Error request people users.search offset')
        });
      }

    });
  }
}


function getUsers(fields, dispatch) {
  VK.Api.call('users.search', fields, (res) => {
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

export function setOffset(num) {
  return {
    type: SET_OFFSET,
    payload: num
  }
}


export function removePerson(id) {
  return {
    type: REMOVE_PERSON,
    payload: id
  }
}
