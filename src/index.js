import React from 'react'
import ReactDOM from 'react-dom'

import './structure/style/index.scss'

import App from './pages/App'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
