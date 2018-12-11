import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SearchBar from './search-bar'
import Weather from './weather'
import { fetchForecastByCoord } from '../redux/forecast/actions'
import './index.css'

class Forecast extends PureComponent {
  render() {
    const { weather } = this.props

    return (
      <div className="forecast">
        <header>
          <SearchBar />
        </header>
        {weather && <Weather {...this.props} />}
      </div>
    )
  }
}

function mapStateToProps({ forecast }) {
  const { coord, city, values, weather, fetchStatus } = forecast
  return {
    coord,
    city,
    values,
    weather,
    fetchStatus
  }
}

export default connect(mapStateToProps, { fetchForecastByCoord })(Forecast)
