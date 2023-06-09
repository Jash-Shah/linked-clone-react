import React from 'react';
import './InputOptions.css'

export const InputOptions = ({ Icon, title, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{color: color}} />
      <h4> {title} </h4>
    </div>
  )
}
