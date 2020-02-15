import { FETCH_USERREPOS_LOADING, FETCH_USERREPOS } from '../actions/userReposAction';

const initialState = {
  loading: false,
  userName: '',
  userRepos: '',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERREPOS_LOADING:
      return { ...state, loading: true };
    case FETCH_USERREPOS:
      return { ...state, loading: true, userRepos: action.payload };
    default:
      return state;
  }
}
