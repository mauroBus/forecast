import React from 'react'
import './icon.css'

export default function WeatherIcon({ type }) {
  let content = ''
  switch (type) {
    case '02d':
      content = (
        <div className="cloudGroup">
          <div className="sunGroup">
            <span className="iconCloud sun"></span>
            <span className="iconCloud sunshine"></span>
          </div>
          <span className="iconCloud cloudCircle shadowCloudClip"></span>
          <span className="iconCloud cloudBase shadowCloudClip"></span>
        </div>
      )
      break
    case '11d':
      content = (
        <div className="cloudGroup">
          <span className="iconCloud cloudCircle shadowCloudClip"></span>
          <span className="iconCloud cloudBase shadowCloudClip"></span>
          <div className="rainGroup">
            <span className="iconCloud rain"></span>
          </div>
        </div>
      )
      break
    default:
      content = (
        <div className="cloudGroup">
          <span className="iconCloud cloudCircle shadowCloudClip"></span>
          <span className="iconCloud cloudBase shadowCloudClip"></span>
        </div>
      )
  }

  return (
    <div className="icon">
      {content}
    </div>
  )
}
