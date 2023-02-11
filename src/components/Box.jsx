import React from 'react'
import Cell from './Cell'

export default function Box() {
  return (
      <div className="box">
          <div className="row one">
          <Cell/>
          <Cell/>
          <Cell/>
          </div>
          <div className="row two">
          <Cell/>
          <Cell/>
          <Cell/>
          </div>
          <div className="row three">
          <Cell/>
          <Cell/>
          <Cell/>
          </div>
    </div>
  )
}
