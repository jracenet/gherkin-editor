import React from 'react'
import ScenarioStep from './steps/Step'

export default class Scenario extends React.Component {
  constructor(props) {
    super(props)
    this.onEditScenarioName = this.editScenarioName.bind(this)
  }

  render() {
    return (
      <li>
        {this.scenarioHeader()}
        <ul>
          {this.scenarioSteps()}
        </ul>
      </li>
    )
  }

  scenarioHeader() {
    return <h2>
      {this.props.scenario.keyword}: <input defaultValue={this.props.scenario.name} onBlur={this.onEditScenarioName}/>
    </h2>
  }

  scenarioSteps() {
    return this.props.scenario.steps.map((step) =>
      <ScenarioStep step={step}/>
    )
  }

  editScenarioName(e) {
    let newScenarioAst = Object.assign(this.props.scenario)
    newScenarioAst.name = e.target.value
    console.log(newScenarioAst)
    this.props.updateFeatureChild(newScenarioAst, this.props.index)
  }
}
