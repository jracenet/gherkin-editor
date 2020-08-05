import React from 'react'

export default function(props) {
  return <div className="text-renderer">
    <textarea id="gherkin-render" value={props.txtDefinition} rows="20" readonly="true"/>
  </div>
}