import React from 'react'
import ScenarioRender from './ScenarioRender'
import GherkinAstMutator from 'lib/GherkinAstMutator'

export default function(props) {
  const scenarioIndex = props.index
  let mutableScenarioAST = { ...props.scenario }

  const scenarioHeaderActions = {
    editScenarioName(newName) {
      mutableScenarioAST.name = newName
      return props.updateFeatureChild(mutableScenarioAST, scenarioIndex)
    },

    onDeleteScenario() {
      return props.onDeleteScenario(scenarioIndex)
    }
  }

  function updateScenarioDescription(newDescription) {
    mutableScenarioAST.description = newDescription
    return props.updateFeatureChild(mutableScenarioAST, scenarioIndex)
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
      updateScenarioDescription = { updateScenarioDescription }
      steps = { mutableScenarioAST.steps }
      scenarioHeaderActions={ scenarioHeaderActions }
      scenarioStepsActions={ scenarioStepsActions }
    />
  </>
}