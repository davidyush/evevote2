import {
  CHANGE_COUNT_FILTER,
  CHANGE_Q_FILTER,
  CHANGE_AGE_FROM_FILTER,
  CHANGE_AGE_TO_FILTER,
  CHANGE_GENDER
} from '../constants/filter_constants'

export function changeCount(count) {
  return {
    type: CHANGE_COUNT_FILTER,
    payload: count
  }
}

export function changeQuery(query) {
  return {
    type: CHANGE_Q_FILTER,
    payload: query
  }
}

export function changeAgeFrom(age) {
  return {
    type: CHANGE_AGE_FROM_FILTER,
    payload: age
  }
}

export function changeAgeTo(age) {
  return {
    type: CHANGE_AGE_TO_FILTER,
    payload: age
  }
}


export function changeGender(gender) {
  return {
    type: CHANGE_GENDER,
    payload: gender
  }
}
