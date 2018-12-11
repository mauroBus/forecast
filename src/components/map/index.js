import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './index.css'

export default class CityMap extends PureComponent {
  map = null

  mapRef = null
  setMapRef = (ref) => {
    this.mapRef = ref
  }

  componentDidMount() {
    this.renderMap()
  }

  componentDidUpdate() {
    const { lat, lon } = this.props
    if (!this.map) return
    if (lat === this.lat && lon === this.lon) return

    this.map.setView([lat, lon])
  }

  componentWillUnmount() {
    if (!this.map) return
    this.map.clearAllEventListeners()
    this.map.remove()
  }

  handleMouseMove = (event) => {
    if (!event.latlng) return
    const { lat, lng } = event.latlng
    this.lat = lat
    this.lon = lng
  }

  handleMove = (event) => {
    const { onMove } = this.props
    onMove && onMove({ lat: this.lat, lon: this.lon })
  }

  renderMap() {
    const { lat, lon } = this.props
    if (!this.mapRef) return

    var osmBase = window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    this.map = window.L.map(this.mapRef, {
       center: [lat, lon],
       zoom: 11
    })

    osmBase.addTo(this.map)

    this.map.addEventListener('moveend', this.handleMove)
    this.map.addEventListener('mousemove', this.handleMouseMove)
  }

  render() {
    return <div className="map" ref={this.setMapRef} />
  }
}
