import React, { PureComponent } from 'react'
import Forecast from './forecast'
import SideBar from './sidebar'
import './App.css'

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Forecast />
        <SideBar />
      </div>
    )
  }
}

export default App
