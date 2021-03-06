import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store/store'
import Root from '../components/root'
import '../styles/app.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()
window.store = store

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})