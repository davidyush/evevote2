import { combineReducers } from 'redux'
import user from './user'
import people from './people'
import filter from './filter'
import vkvote from './vkvote'
import vkdb from './vkdb'

export default combineReducers({
  user,
  people,
  filter,
  vkvote,
  vkdb
});
