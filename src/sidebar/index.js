
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadHistory, removeWeatherHistory } from '../redux/history/actions'
import { fetchForecast } from '../redux/forecast/actions'
import './index.css'

class Sidebar extends PureComponent {
  componentDidMount() {
    this.props.loadHistory()
  }

  handleLoadHistory = (city) => () => {
    this.props.fetchForecast({ city, saveHistory: false })
  }

  handleDeleteHistory = (id) => () => {
    this.props.removeHistory(id)
  }

  renderHistoryItem = (weather) => {
    const { id, city } = weather
    return (
      <li key={id} className="historyItem">
        <a
          className="historyItemName appLink"
          onClick={this.handleLoadHistory(city)}
        >
          {city}
        </a>
        <span
          className="historyItemDeleteBtn appLink"
          onClick={this.handleDeleteHistory(id)}
        >
          X
        </span>
      </li>
    )
  }

  render() {
    const { history } = this.props

    return (
      <aside className="sidebar">
        <h2 className="sidebarHeader">History</h2>
        <ul className="historyList">
          {history.map(this.renderHistoryItem)}
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = ({ history }) => ({
  history: history.history
})

const mapDispatchToProps = {
  fetchForecast,
  loadHistory,
  removeHistory: removeWeatherHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
