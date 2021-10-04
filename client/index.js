import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

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
            <Route exact path="/" component={SongList} />
            <Route path="/songs/new" exact component={SongCreate} />
            <Route path="/songs/:id" component={SongDetail} />
          </Switch>
        </App>
      </HashRouter>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
