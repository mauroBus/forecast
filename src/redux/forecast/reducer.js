import {
  FETCH_FORECAST_START,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_ERROR,
  LOAD_FORECAST
} from './actions'

const defaultState = {
  fetchStatus: 'UNSENT',
  weather: null,
  values: null,
  city: '',
  coord: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_FORECAST_START:
      return {
        ...state,
        fetchStatus: 'LOADING'
      }

    case FETCH_FORECAST_SUCCESS: {
      const {
        weather,
        name: city,
        coord,
        main: values
      } = action.payload.data

      return {
        ...state,
        fetchStatus: 'DONE',
        city,
        coord,
        values,
        weather: weather[0]
      }
    }

    case FETCH_FORECAST_ERROR:
      return {
        ...state,
        fetchStatus: 'ERROR'
      }

    case LOAD_FORECAST: {
      const {
        weather,
        name: city,
        coord,
        main: values
      } = action.forecast
      return {
        ...state,
        city,
        coord,
        values,
        weather
      }
    }

    default:
       return state
  }
}

export default reducer
