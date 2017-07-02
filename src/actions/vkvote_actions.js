import {
  CLONE_PEOPLE,
  GET_PAIR,
  UPDATE_LADDER,
  MAKE_LOG,
  CLEAR_LOG
} from '../constants/vkvote_const'

import getTwo from '../helpers/algo'

export function clonePeople(peopleVote) {
  return {
    type: CLONE_PEOPLE,
    payload: peopleVote
  }
}

export function getPair(currentPeople, nameId) {
  return {
    type: GET_PAIR,
    payload: getTwo(currentPeople, nameId)
  }
}

export function updateLadder(winer, loser) {
  return {
    type: UPDATE_LADDER,
    payload: { winer, loser }
  }
}

export function makeLog(logObj) {
  return {
    type: MAKE_LOG,
    payload: logObj
  }
}

export function clearLog() {
  return {
    type: CLEAR_LOG,
    payload: null
  }
}
