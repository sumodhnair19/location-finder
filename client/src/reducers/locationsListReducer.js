import {
  FETCH_LOCATIONS_LIST
} from './../actions/types';

const initialState = {
  locations: {}
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_LIST:
      return {
        ...state,
        locations: action.payload.items
      };
    default:
      return state;
  }
}