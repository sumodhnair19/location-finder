import React, {Component,Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import HomeView from './views/HomeView';
import client from './ApolloClient';
import store from './store';
import ApartmentView from "./views/ApartmentView";
import LocationView from "./views/LocationView";
import HeaderView from "./views/HeaderView";


class App extends Component {
  render() {
    return (
      <Fragment>
      <HeaderView/>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={HomeView}/>
              <Route exact path="/apartments/:apartmentId" component={ApartmentView}/>
              <Route exact path="/locations" component={LocationView}/>
            </div>
          </Router>
        </Provider>
      </ApolloProvider>
      </Fragment>
    );
  }
}

export default App;
