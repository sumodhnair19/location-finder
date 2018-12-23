import {
  FETCH_APARTMENT
} from './../actions/types';

const initialState = {
  apartment: {}
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APARTMENT:
      return {
        ...state,
        apartment: action.payload.apartment
      };
    default:
      return state;
  }
}