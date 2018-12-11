import { combineReducers } from 'redux'
import ForecastReducer from './forecast/reducer'
import HistoryReducer from './history/reducer'

export default combineReducers({
  forecast: ForecastReducer,
  history: HistoryReducer
})
