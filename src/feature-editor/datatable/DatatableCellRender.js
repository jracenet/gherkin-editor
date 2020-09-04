import React from 'react'

export default function(props) {
  return <input defaultValue={props.cell.value} onBlur={(e) => { props.onCellValueChange(e.target.value)}} />
}