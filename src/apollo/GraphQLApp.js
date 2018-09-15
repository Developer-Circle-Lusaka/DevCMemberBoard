import React, { Component } from 'react';
import  ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import 'antd/dist/antd.css'
import Developers from './DevelopersComponent'
const client = new ApolloClient(
  {
    uri:'http://localhost:4000/graphql'
  }
)
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Developers/>
      </ApolloProvider>
    );
  }
}

export default App;
