import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './components/App'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SignupForm} />
          </Switch>
        </App>
      </HashRouter>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
