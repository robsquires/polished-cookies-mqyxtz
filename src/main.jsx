import React from 'react'
import ReactDOM from 'react-dom/client'
import { Single } from './Single'
import { Multiple } from './Multiple'
import './index.css'

const App = () => (
  <div>
    <h2 className="text-lg font-bold">Single ✅</h2>
    <Single />
    <h2 className="pt-6 text-lg font-bold">Single with label ✅</h2>
    <Single label="Single Label" />
    <h2 className="pt-6 text-lg font-bold">Multiple ✅</h2>
    <Multiple />
    <h2 className="pt-6 text-lg font-bold">Multiple with label ❌</h2>
    <Multiple label="Multiple Label" />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
