import React from 'react'
import ScenarioHeaderRender from './ScenarioHeaderRender'
import Description from '../commons/Description'
import ScenarioStepsRender from './ScenarioStepsRender'
import ExampleTablesRender from '../examples/ExampleTablesRender'

export default function(props) {
  const scenarioActions = props.scenarioActions

  return <li className="tile">
    <ScenarioHeaderRender
      index={ props.index }
      keyword={ props.keyword }
      name={ props.name }
      actions={ props.scenarioActions }
    />

    <Description description={ props.description } updateDescription={ scenarioActions.editScenarioDescription } />
    <ScenarioStepsRender steps={ props.steps } actions={ props.scenarioStepsActions }/>
    <ExampleTablesRender examples={ props.examples } onEditExamples={ scenarioActions.editExamples } />
  </li>
}