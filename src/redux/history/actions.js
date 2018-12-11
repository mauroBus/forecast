
export const REMOVE_WEATHER = 'REMOVE_WEATHER'
export const LOAD_HISTORY = 'LOAD_HISTORY'

export const loadHistory = () => ({
  type: LOAD_HISTORY
})

export const removeWeatherHistory = (weatherId) => ({
  type: REMOVE_WEATHER,
  weatherId
})
