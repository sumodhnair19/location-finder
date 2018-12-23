import {FETCH_APARTMENT} from "./types";
import gql from "graphql-tag";
import client from './../ApolloClient';


export const fetchApartment = (_id) => dispatch => {
  client.query({
    query: gql`
    {
      apartment(_id: "${_id}") {
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
        images
        amenities
        services
      }
    }`
})
.then(apartment => dispatch({
  type: FETCH_APARTMENT,
  payload: apartment.data
}));
};
