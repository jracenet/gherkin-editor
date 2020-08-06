import React from 'react'
import FeatureEditorRender from './FeatureEditorRender'
import { IdGenerator } from '@cucumber/messages'

export default function(props) {
  const featureAST = props.ast.feature
  let mutableFeatureAST = {...props.ast}

  const scenarioActions = {
    updateFeatureChild(childAst, index) {
      mutableFeatureAST.feature.children[index] = { scenario: childAst }
      props.onAstUpdated(mutableFeatureAST)
    },

    createNewScenario(index, isOutline) {
      const newScenarioAst = {
        examples: [],
        id: IdGenerator.uuid()(),
        keyword: (isOutline)? 'Scenario Outline' : 'Scenario',
        location: { line: null, column: null },
        name: "",
        steps: [],
        tags: []
      }

      const actualIndex = (index === ":first")? 0 : index + 1
      mutableFeatureAST.feature.children.splice(actualIndex, 0, { scenario: newScenarioAst })

      props.onAstUpdated(mutableFeatureAST)
    },

    deleteScenario(index) {
      mutableFeatureAST.feature.children.splice(index, 1)
      props.onAstUpdated(mutableFeatureAST)
    }
  }

  function updateFeatureName(newName) {
    mutableFeatureAST.feature.name = newName
    props.onAstUpdated(mutableFeatureAST)
  }

  function updateFeatureDescription(newDescription) {
    mutableFeatureAST.feature.description = newDescription
    props.onAstUpdated(mutableFeatureAST)
  }

  return <>
    <FeatureEditorRender
      keyword={ featureAST.keyword }
      name={ featureAST.name }
      description= { featureAST.description }
      featureChildren={ featureAST.children }

      scenarioActions={ scenarioActions }
      updateFeatureName={ updateFeatureName }
      updateFeatureDescription={ updateFeatureDescription }
    />
  </>
}
