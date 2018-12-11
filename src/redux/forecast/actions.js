import axios from 'axios'
import { API_KEY, FORECAST_URL } from '../../constants'

export const FETCH_FORECAST_START = 'FETCH_FORECAST_START'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_ERROR = 'FETCH_FORECAST_ERROR'
export const LOAD_FORECAST = 'LOAD_FORECAST'

function fetchForecastStart() {
  return {
    type: FETCH_FORECAST_START,
    payload: null
  }
}

function fetchForecastSuccess(payload, saveHistory) {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload,
    saveHistory
  }
}

function fetchForecastError(payload) {
  return {
    type: FETCH_FORECAST_ERROR,
    payload
  }
}

export function fetchForecast({ city, units = 'metric', saveHistory = true }) {
  if (!city) return fetchForecastError()
  const url = `${FORECAST_URL}?q=${city}&units=${units}&appid=${API_KEY}`

  return (dispatch) => {
    dispatch(fetchForecastStart())

    axios.get(url)
      .then(payload =>
        dispatch(fetchForecastSuccess(payload, saveHistory))
      )
      .catch(err =>
        dispatch(fetchForecastError(err))
      )
  }
}

export function fetchForecastByCoord({ lat, lon, units = 'metric', saveHistory = true }) {
  if (!lat || !lon) return fetchForecastError()
  const url = `${FORECAST_URL}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`

  return (dispatch) => {
    dispatch(fetchForecastStart())

    axios.get(url)
      .then(payload =>
        dispatch(fetchForecastSuccess(payload, saveHistory))
      )
      .catch(err =>
        dispatch(fetchForecastError(err))
      )
  }
}

export function loadForecast(forecast) {
  return {
    type: LOAD_FORECAST,
    forecast
  }
}
