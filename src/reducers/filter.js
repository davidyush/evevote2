import {
  CHANGE_COUNT_FILTER,
  CHANGE_Q_FILTER,
  CHANGE_AGE_FROM_FILTER,
  CHANGE_AGE_TO_FILTER,
  CHANGE_GENDER
} from '../constants/filter_constants'

const initialState = {
  q: '',
  count: 30,
  has_photo: 1,
  city: '',
  country: '',
  age_from: '',
  age_to: '',
  sex: 0,
  fields: [ 'photo_200','photo_100','city','country',
            'bdate', 'home_town','sex', 'relation',
            'photo_400_orig','has_photo', 'about', 'status'
  ]
};

export default function filter(state = initialState, action) {
  switch(action.type) {
    case CHANGE_COUNT_FILTER:
      return { ...state, count: action.payload };
    case CHANGE_Q_FILTER:
      return { ...state, q: action.payload };
    case CHANGE_AGE_FROM_FILTER:
      return { ...state, age_from: action.payload };
    case CHANGE_AGE_TO_FILTER:
      return { ...state, age_to: action.payload };
    case CHANGE_GENDER:
      return { ...state, sex: action.payload };
    default:
      return state;
  }
}
