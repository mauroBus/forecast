import React, { PureComponent } from 'react'
import CityMap from '../components/map'
import WeatherIcon from './icon'
import './weather.css'

export default class Weather extends PureComponent {
  renderWeather(weather, values) {
    const {
      temp,
      pressure,
      humidity,
      temp_max: tempMax, // Camel case conversion should be done in the reducer.
      temp_min: tempMin
    } = values
    const { id } = weather

    return (
      <tr key={id}>
        <td className="cell text-center">{temp}°</td>
        <td className="cell text-center">{pressure}</td>
        <td className="cell text-center">{humidity}</td>
        <td className="cell text-center">{tempMax}°</td>
        <td className="cell text-center">{tempMin}°</td>
      </tr>
    )
  }

  renderError() {
    // TODO: Render proper error feedback.
    return 'Error'
  }

  renderLoading() {
    // TODO: Render proper loading feedback.
    return 'Loading...'
  }

  renderForecast() {
    const { coord, city, values, weather, fetchForecastByCoord } = this.props
    const { main, description, icon } = weather

    return (
      <section className="weather">
        <h1 className="title">Current weather in {city}</h1>
        <article>
          <h2>Summary</h2>
          <p>{main}</p>
          <p>{description}</p>
          <WeatherIcon type={icon} />
        </article>

        <article>
          <h2>Details</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="heading text-center">Temperature (C)</th>
                <th className="heading text-center">Pressure (hPa)</th>
                <th className="heading text-center">Humidity (%)</th>
                <th className="heading text-center">Max Temperature</th>
                <th className="heading text-center">Min Temperature</th>
              </tr>
            </thead>
            <tbody>
              {this.renderWeather(weather, values)}
            </tbody>
          </table>
        </article>

        <article>
          <h2>Map</h2>
          {coord && (
            <CityMap
              lat={coord.lat}
              lon={coord.lon}
              onMove={fetchForecastByCoord}
            />
          )}
        </article>
      </section>
    )
  }

  render() {
    switch (this.props.fetchStatus) {
      case 'DONE':
        return this.renderForecast()
      case 'LOADING':
        return this.renderLoading()
      default:
        return this.renderError()
    }
  }
}
