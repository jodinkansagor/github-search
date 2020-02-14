import { FETCH_USERINFO_LOADING, FETCH_USERINFO } from '../actions/searchUserAction';

const initialState = {
  loading: true,
  userName: '',
  userInfo: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERINFO_LOADING:
      return { ...state, loading: true };
    case FETCH_USERINFO:
      return { ...state, loading: false, userInfo: action.payload };
    default:
      return state;
  }
}
