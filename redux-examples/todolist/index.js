import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

let store = createStore(todoApp)

setInterval(()=>console.log('state is: ' , store.getState()),3000)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)