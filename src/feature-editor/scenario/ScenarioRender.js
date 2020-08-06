import React from 'react'
import ScenarioHeaderRender from './ScenarioHeaderRender'
import ScenarioStepsRender from './ScenarioStepsRender'

export default function(props) {
  return <li className="tile">
    <ScenarioHeaderRender
      index={ props.index }
      keyword={ props.keyword }
      name={ props.name }
      actions={ props.scenarioHeaderActions }
    />

    <ScenarioStepsRender steps={ props.steps } actions={ props.scenarioStepsActions }/>
  </li>
}