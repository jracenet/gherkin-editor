import React from 'react';
import Title from './feature-editor/title/Title'
import Description from './feature-editor/description/Description'
import ScenarioContainer from './feature-editor/scenario/ScenarioContainer'
import { IdGenerator } from '@cucumber/messages'

export default function(props) {
  let scenarioList = null

  function updateFeatureChild(childAst, index) {
    let updatedAst = { ...props.ast }
    updatedAst.feature.children[index] = {scenario: childAst}

    props.onAstUpdated(updatedAst)
  }

  function createNewScenario(index, isOutline) {
    let updatedAst = { ...props.ast }

    let newScenarioAst = {
      examples: [],
      id: IdGenerator.uuid()(),
      keyword: (isOutline)? 'Scenario Outline' : 'Scenario',
      location: { line: null, column: null },
      name: "",
      steps: [],
      tags: []
    }

    const actualIndex = (index === ":first")? 0 : index + 1
    updatedAst.feature.children.splice(actualIndex, 0, { scenario: newScenarioAst })

    props.onAstUpdated(updatedAst)
  }

  function deleteScenario(index) {
    let updatedAst = { ...props.ast }
    updatedAst.feature.children.splice(index, 1)
    props.onAstUpdated(updatedAst)
  }

  if (props.ast.feature.children.length > 0) {
    const scenarioComponents = props.ast.feature.children.map((sc, index) =>
      <>
        <ScenarioContainer key={sc.scenario.id} scenario={sc.scenario} index={index} updateFeatureChild={updateFeatureChild}
          onDeleteScenario={ deleteScenario }/>
        <button class="tiles-list__gutter-action btn--main" onClick={() => createNewScenario(index, false)}>+</button>
      </>
    )
    scenarioList =
      <ul class="tiles-list">
        <button class="tiles-list__gutter-action btn--main" onClick={() => createNewScenario(":first", false)}>+</button>
        { scenarioComponents }
      </ul>
  } else {
    scenarioList = <>
      <button class="btn--main" onClick={() => createNewScenario(0, false)}>Add a first scenario</button>
    </>
  }

  function updateFeatureName(newName) {
    let updatedAst = { ...props.ast }
    updatedAst.feature.name = newName
    props.onAstUpdated(updatedAst)
  }

  function updateFeatureDescription(newDescription) {
    let updatedAst = { ...props.ast }
    updatedAst.feature.description = newDescription

    props.onAstUpdated(updatedAst)
  }

  return <div className="visual-editor">
        <Title keyword={props.ast.feature.keyword} title={props.ast.feature.name} updateFeatureName={ updateFeatureName }/>
        <Description description={props.ast.feature.description} updateDescription={ updateFeatureDescription } />
        {scenarioList}
      </div>
}