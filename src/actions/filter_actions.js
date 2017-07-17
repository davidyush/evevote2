import {
  CHANGE_COUNT_FILTER,
  CHANGE_Q_FILTER,
  CHANGE_AGE_FROM_FILTER,
  CHANGE_AGE_TO_FILTER,
  CHANGE_GENDER,
  CHANGE_COUNTRY_FILTER,
  CHANGE_CITY_FILTER,
  CHANGE_RELATION
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

export function changeCountry(countryId) {
  return {
    type: CHANGE_COUNTRY_FILTER,
    payload: countryId
  }
}

export function changeCity(cityId) {
  return {
    type: CHANGE_CITY_FILTER,
    payload: cityId
  }
}

export function changeRelation(relationId) {
  return {
    type: CHANGE_RELATION,
    payload: relationId
  }
}
