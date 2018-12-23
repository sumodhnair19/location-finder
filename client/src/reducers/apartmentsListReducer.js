import {
  FETCH_APARTMENTS_LIST,
  FETCH_APARTMENTS_BASED_ON_SEARCH,
  FETCH_APARTMENTS_ON_FILTER_SELECTION,
  NO_DATA,
  FETCH_APARTMENTS_BASED_ON_COUNTRY
} from './../actions/types';

const initialState = {
  apartments: {}
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_LIST:
      return {
        ...state,
        apartments: action.payload.apartments
      };
    case FETCH_APARTMENTS_BASED_ON_SEARCH:
      return {
        ...state,
        apartments: action.payload.apartments
      };
    case FETCH_APARTMENTS_ON_FILTER_SELECTION:
      return {
        ...state,
        apartments: action.payload
      };
    case FETCH_APARTMENTS_BASED_ON_COUNTRY:
      return {
        ...state,
        apartments: action.payload.apartments
      };
    case NO_DATA:
      return {
        ...state,
        apartments: action.payload
      };
    default:
      return state;
  }
}
