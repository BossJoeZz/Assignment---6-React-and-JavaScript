import React from 'react'
import ReactDOM from 'react-dom/client'
import Cell from './Cell.jsx'
import CellContainer from './CellContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CellContainer>
    <Cell/>
    </CellContainer>
  </React.StrictMode>,
)
