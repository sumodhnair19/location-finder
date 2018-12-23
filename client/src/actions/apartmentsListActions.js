import {FETCH_APARTMENTS_LIST,FETCH_APARTMENTS_BASED_ON_SEARCH,FETCH_APARTMENTS_ON_FILTER_SELECTION,NO_DATA,FETCH_APARTMENTS_BASED_ON_COUNTRY} from "./types";
import gql from "graphql-tag";
import client from './../ApolloClient';
import {WEBURL} from '../constants';
import axios from 'axios';

const getAparmentsBasedOnLocation = async (_id) => {
  let apartmentList = await client.query({
    query: gql`
    {
      apartments(location: "${_id}") {
        items {
          _id
          owner {
          _id
            email
          }
          title
          location {
            title
          }
          size
          price
          amenities
          images
        }
      }
    }`
})
return apartmentList;
}

export const fetchApartmentsList = () => dispatch => {
  client.query({
    query: gql`
    {
      apartments(active: true) {
        items {
          _id
          owner {
          _id
            email
          }
          title
          location {
            title
          }
          size
          price
          amenities
          images
        }
      }
    }`
})
.then(apartments => dispatch({
  type: FETCH_APARTMENTS_LIST,
  payload: apartments.data
}));
};
export const fetchApartmentBasedOnSearch = (searchedParam) => async dispatch => {
  let apartment = null;
  let apartmentList = null;
  try {
    apartment  = await axios.get(`${WEBURL}locations?title=${searchedParam}`)

    if(apartment.data && apartment.data.length>0) {
      let _id = apartment.data[0]._id;
        try {
          apartmentList = await getAparmentsBasedOnLocation(_id);
        } catch(e){
            apartmentList = null
        }
    } else {
      dispatch({
      type: NO_DATA,
      payload: {apartments: 'no data found'}
    });
    }
  } catch(e) {
    dispatch({
    type: NO_DATA,
    payload: {apartments: e}
  });
  }
  if(apartmentList !== null)
      dispatch({
      type: FETCH_APARTMENTS_BASED_ON_SEARCH,
      payload: apartmentList.data
    });
};
export const fetchApartmentBasedOnFilter = (...params) => dispatch => {
  let typeOfFilter = params[0];
  let apartmentListArr = params[1];
    apartmentListArr = apartmentListArr.filter((val)  => {
          if(val[typeOfFilter]) return val;
      });
      apartmentListArr.sort((a,b)=> a[typeOfFilter] - b[typeOfFilter])
      dispatch({
  type: FETCH_APARTMENTS_ON_FILTER_SELECTION,
  payload: apartmentListArr
});
};
export const fetchApartmentBasedOnCountry = (_id) => async dispatch => {
  let apartmentList = await getAparmentsBasedOnLocation(_id);
dispatch({
  type: FETCH_APARTMENTS_BASED_ON_COUNTRY,
  payload: apartmentList.data
});
};
