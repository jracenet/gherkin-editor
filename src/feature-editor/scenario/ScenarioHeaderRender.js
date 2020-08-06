import React from 'react'
import EditableTitle from '../commons/EditableTitle'

export default function(props) {
  return <h2 className="editable-title">
    <EditableTitle
      keyword={ props.keyword }
      title={ props.name }
      updateTitle={ props.actions.editScenarioName }
    />
    <button className="btn--secondary" onClick={ props.actions.onDeleteScenario }>Delete</button>
  </h2>
}