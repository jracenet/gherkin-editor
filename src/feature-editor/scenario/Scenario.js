import React from 'react'
import ScenarioStep from './steps/Step'
import GherkinAstMutator from 'lib/GherkinAstMutator'

export default class Scenario extends React.Component {
  constructor(props) {
    super(props)
    this.onEditScenarioName = this.editScenarioName.bind(this)
    this.onEditStep = this.editStep.bind(this)
    this.addStep = this.addStep.bind(this)
    this.onEditAndAddStep = this.editAndAddStep.bind(this)
  }

  render() {
    return (
      <li class="tile">
        {this.scenarioHeader()}
        <ul class="steps-list">
          {this.scenarioSteps()}
          <button class="btn--secondary" onClick={this.addStep}>Add step</button>
        </ul>
      </li>
    )
  }

  scenarioHeader() {
    return <h2 class="editable-title">
      <span class="gherkin-keyword">{this.props.scenario.keyword}:</span>
      <input placeholder="Empty name" defaultValue={this.props.scenario.name} onBlur={this.onEditScenarioName}/>
    </h2>
  }

  scenarioSteps() {
    return this.props.scenario.steps.map((step, index) =>
      <ScenarioStep key={step.id} step={step} index={index} onEditStep={this.onEditStep} onAddStep={this.addStep} onEditAndAddStep={this.onEditAndAddStep}/>
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

  addStep(index) {
    let newScenarioAst = GherkinAstMutator.addStepAt(this.props.scenario, index)

    this.props.updateFeatureChild(newScenarioAst, this.props.index)

    return newScenarioAst
  }

  editAndAddStep(newStepAst, index) {
    let newScenarioAst = Object.assign(this.props.scenario)
    newScenarioAst.steps[index] = newStepAst
    newScenarioAst = GherkinAstMutator.addStepAt(newScenarioAst, index)

    this.props.updateFeatureChild(newScenarioAst, this.props.index)

    return newScenarioAst
  }
}
