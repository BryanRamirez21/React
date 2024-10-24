import React from 'react'

export const Counters = () => {
  return (
    <div className="d-flex flex-column">
        <div className="d-flex flex-row">
            Counter {}: {}
            <button className="btn btn-secondary">+</button>
            <button className="btn btn-secondary">-</button>
        </div>
        <div className="d-flex flex-row">
            <button className="btn btn-secondary">Reset</button>
            <button className="btn btn-secondary">Delete</button>
        </div>
        

    </div>
  )
}
