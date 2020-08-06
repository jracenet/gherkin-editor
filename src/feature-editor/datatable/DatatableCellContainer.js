import React from 'react'
import DatatableCellRender from './DatatableCellRender'

export default function(props) {
  return <>
    <DatatableCellRender cell={ props.cell }/>
  </>
}