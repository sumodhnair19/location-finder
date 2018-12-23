import ApolloClient from "apollo-boost/lib/index";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

export default client;
