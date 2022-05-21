import {GET_NEWS_FEED, RESET_SEARCH_RESULTS, SEARCH_NEWS} from './actions';

const initialState = {
  newsFeed: [],
  searchResults: [],
};

const feedReducer = (
  state = initialState,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    case GET_NEWS_FEED:
      return {...state, newsFeed: action.payload};
    case SEARCH_NEWS:
      return {...state, searchResults: action.payload};
    case RESET_SEARCH_RESULTS:
      return {...state, searchResults: []};
    default:
      return state;
  }
};

export default feedReducer;
