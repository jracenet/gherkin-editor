import React from 'react'
import ScenarioStep from './steps/Step'

export default class Scenario extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <h2>{this.scenarioHeader()}</h2>
        <ul>
          {this.scenarioSteps()}
        </ul>
      </li>
    )
  }

  scenarioHeader() {
    return `${this.props.scenario.keyword}: ${this.props.scenario.name}`
  }

  scenarioSteps() {
    return this.props.scenario.steps.map((step) =>
      <ScenarioStep step={step}/>
    )
  }
}
