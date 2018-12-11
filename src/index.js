import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import configureStore from './configure-store'
import App from './App'
import './index.css'
import './table.css'
import '../node_modules/leaflet/dist/leaflet.css'
import '../node_modules/leaflet/dist/leaflet'

const store = configureStore()

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
