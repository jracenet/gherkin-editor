import React from 'react'
import ScenarioStep from './steps/Step'
import { IdGenerator } from '@cucumber/messages'

export default class Scenario extends React.Component {
  constructor(props) {
    super(props)
    this.onEditScenarioName = this.editScenarioName.bind(this)
    this.onEditStep = this.editStep.bind(this)
    this.addStep = this.addStep.bind(this)
  }

  render() {
    return (
      <li>
        {this.scenarioHeader()}
        <ul>
          {this.scenarioSteps()}
          <button onClick={this.addStep}>+ Add step</button>
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
    return this.props.scenario.steps.map((step, index) =>
      <ScenarioStep step={step} index={index} onEditStep={this.onEditStep}/>
    )
  }

  editScenarioName(e) {
    let newScenarioAst = Object.assign(this.props.scenario)
    newScenarioAst.name = e.target.value
    this.props.updateFeatureChild(newScenarioAst, this.props.index)
  }

  editStep(stepAst, index) {
    let newScenarioAst = Object.assign(this.props.scenario)
    newScenarioAst.steps[index] = stepAst
    this.props.updateFeatureChild(newScenarioAst, this.props.index)
  }

  _addStep() {
    let newScenarioAst = Object.assign(this.props.scenario)
    const scenarioLength = this.props.scenario.steps.length,
          lastStep = this.props.scenario.steps[scenarioLength - 1]

    let newStepLocation = null

    if (!lastStep) {
      const scenarioLocation = this.props.scenario.location
      newStepLocation = { line: scenarioLocation.line, column: scenarioLocation.column + 2 }
    } else {
      newStepLocation = lastStep.location
    }

    this.props.addNewStepLine(newStepLocation)
  }

  addStep() {
    let newStepAst = {
      id: IdGenerator.uuid(),
      keyword: "* ",
      location: {line: null, column: null},
      text: "",
      argument: undefined,
    }

    let newScenarioAst = Object.assign(this.props.scenario)
    newScenarioAst.steps.push(newStepAst)
    this.props.updateFeatureChild(newScenarioAst, this.props.index)
  }
}
