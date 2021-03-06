import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const App = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
