import React from 'react'
import ScenarioRender from './ScenarioRender'
import GherkinAstMutator from 'lib/GherkinAstMutator'

export default function(props) {
  const scenarioIndex = props.index
  let mutableScenarioAST = { ...props.scenario }
  const scenarioActions = {
    editScenarioName(newName) {
      mutableScenarioAST.name = newName
      return props.updateFeatureChild(mutableScenarioAST, scenarioIndex)
    },

    editScenarioDescription(newDescription) {
      mutableScenarioAST.description = newDescription
      return props.updateFeatureChild(mutableScenarioAST, scenarioIndex)
    },

    onDeleteScenario() {
      return props.onDeleteScenario(scenarioIndex)
    }
  }

  const scenarioStepsActions = {
    addStep(index) {
      const newScenarioAst = GherkinAstMutator.addStepAt(mutableScenarioAST, index)
      props.updateFeatureChild(newScenarioAst, scenarioIndex)

      return newScenarioAst
    },

    editStep(newStepAST, index) {
      mutableScenarioAST.steps[index] = newStepAST
      props.updateFeatureChild(mutableScenarioAST, scenarioIndex)

      return mutableScenarioAST
    },

    editAndAddStep(newStepAST, index) {
      mutableScenarioAST.steps[index] = newStepAST
      mutableScenarioAST = GherkinAstMutator.addStepAt(mutableScenarioAST, index)

      props.updateFeatureChild(mutableScenarioAST, scenarioIndex)

      return mutableScenarioAST
    }
  }

  return <>
    <ScenarioRender
      index={ scenarioIndex }
      keyword={ mutableScenarioAST.keyword }
      name={ mutableScenarioAST.name }
      description={ mutableScenarioAST.description }
      steps = { mutableScenarioAST.steps }
      examples = { mutableScenarioAST.examples }
      scenarioActions={ scenarioActions }
      scenarioStepsActions={ scenarioStepsActions }
    />
  </>
}