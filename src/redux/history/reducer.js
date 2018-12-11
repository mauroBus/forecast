
import { HISTORY_STORAGE_KEY, HISTORY_MAX_LENGTH } from '../../constants'
import {
  LOAD_HISTORY,
  REMOVE_WEATHER
} from './actions'
import { FETCH_FORECAST_SUCCESS } from '../forecast/actions'

const defaultState = {
  history: []
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOAD_HISTORY: {
      const history = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY))
      return {
        ...state,
        history: history || []
      }
    }

    case REMOVE_WEATHER: {
      const { weatherId } = action
      let history = state.history.filter(({ id }) => id !== weatherId)
      history = sliceHistory(history)
      saveHistory(history)

      return {
        ...state,
        history
      }
    }

    case FETCH_FORECAST_SUCCESS: {
      if (!action.saveHistory) return state

      const { name: city, id } = action.payload.data
      let history = [
        ...state.history,
        { id, city }
      ]
      history = sliceHistory(history)
      saveHistory(history)

      return {
        ...state,
        history
      }
    }

    default:
       return state
  }
}

const sliceHistory = (history) => {
  const lenght = history.length
  return lenght >= HISTORY_MAX_LENGTH
    ? history.slice(lenght - 5, lenght)
    : history
}

const saveHistory = (history) => {
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history))
}
