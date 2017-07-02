import { combineReducers } from 'redux'
import user from './user'
import people from './people'
import filter from './filter'
import vkvote from './vkvote'

export default combineReducers({
  user,
  people,
  filter,
  vkvote
});
