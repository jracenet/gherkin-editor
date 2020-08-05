import React from 'react'
import ScenarioStep from './steps/Step'
import GherkinAstMutator from 'lib/GherkinAstMutator'

export default function(props) {
  function addStep(index) {
    let newScenarioAst = GherkinAstMutator.addStepAt(props.scenario, index)

    props.updateFeatureChild(newScenarioAst, props.index)

    return newScenarioAst
  }

  function scenarioHeader() {
    function editScenarioName(e) {
      let newScenarioAst = {...props.scenario}
      newScenarioAst.name = e.target.value
      props.updateFeatureChild(newScenarioAst, props.index)
    }
    return <h2 class="editable-title">
      <span class="gherkin-keyword">{props.scenario.keyword}:</span>
      <input placeholder="Empty name" defaultValue={props.scenario.name} onBlur={ editScenarioName }/>
      <button class="btn--secondary" onClick={() => props.onDeleteScenario(props.index)}>Delete</button>
    </h2>
  }

  function scenarioSteps() {
    function editStep(stepAst, index) {
      let newScenarioAst = {...props.scenario}
      newScenarioAst.steps[index] = stepAst
      props.updateFeatureChild(newScenarioAst, props.index)
    }

    function editAndAddStep(newStepAst, index) {
      let newScenarioAst = {...props.scenario}
      newScenarioAst.steps[index] = newStepAst
      newScenarioAst = GherkinAstMutator.addStepAt(newScenarioAst, index)

      props.updateFeatureChild(newScenarioAst, props.index)

      return newScenarioAst
    }

    return props.scenario.steps.map((step, index) =>
      <ScenarioStep key={step.id} step={step} index={index} onEditStep={editStep} onAddStep={addStep} onEditAndAddStep={editAndAddStep}/>
    )
  }

  return <li class="tile">
        { scenarioHeader() }
        <ul class="steps-list">
          { scenarioSteps() }
          <button class="btn--secondary" onClick={ addStep }>Add step</button>
        </ul>
      </li>
}