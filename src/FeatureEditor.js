import React from 'react';
import Title from './feature-editor/title/Title'
import Description from './feature-editor/description/Description'
import Scenario from './feature-editor/scenario/Scenario'
import { IdGenerator } from '@cucumber/messages'

export default class FeatureEditor extends React.Component {
  constructor(props) {
    super(props)
    this.onUpdateFeatureName = this.updateFeatureName.bind(this)
    this.onUpdateFeatureDescription = this.updateFeatureDescription.bind(this)
    this.onUpdateFeatureChild = this.updateFeatureChild.bind(this)
    this.onAddNewScenario = this.createNewScenario.bind(this)
    this.deleteScenario = this.deleteScenario.bind(this)
  }

  render() {
    let scenarioList = null

    if (this.featureScenarios().length > 0) {
      const scenarioComponents = this.featureScenarios().map((sc, index) =>
        <>
          <Scenario key={sc.scenario.id} scenario={sc.scenario} index={index} updateFeatureChild={this.onUpdateFeatureChild} onDeleteScenario={this.deleteScenario}/>
          <button class="tiles-list__gutter-action btn--main" onClick={() => this.onAddNewScenario(index, false)}>+</button>
        </>
      )
      scenarioList =
        <ul class="tiles-list">
          <button class="tiles-list__gutter-action btn--main" onClick={() => this.onAddNewScenario(":first", false)}>+</button>
          {scenarioComponents}
        </ul>
    } else {
      scenarioList = <>
        <button class="btn--main" onClick={() => this.onAddNewScenario(0, false)}>Add a first scenario</button>
      </>
    }

    return (
      <div className="visual-editor">
        <Title keyword={this.props.ast.feature.keyword} title={this.featureName()} updateFeatureName={this.onUpdateFeatureName}/>
        <Description description={this.featureDescription()} updateDescription={this.onUpdateFeatureDescription} />
        {scenarioList}
      </div>
    )
  }

  featureName() {
    return this.props.ast.feature.name
  }

  featureDescription() {
    return this.props.ast.feature.description
  }

  featureScenarios() {
    return this.props.ast.feature.children
  }

  updateFeatureName(newName) {
    let updatedAst = Object.assign(this.props.ast)
    updatedAst.feature.name = newName

    this.props.onAstUpdated(updatedAst)
  }

  updateFeatureDescription(newDescription) {
    let updatedAst = Object.assign(this.props.ast)
    updatedAst.feature.description = newDescription

    this.props.onAstUpdated(updatedAst)
  }

  updateFeatureChild(childAst, index) {
    let updatedAst = Object.assign(this.props.ast)
    updatedAst.feature.children[index] = {scenario: childAst}

    this.props.onAstUpdated(updatedAst)
  }

  createNewScenario(index, isOutline) {
    let updatedAst = Object.assign(this.props.ast)

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

    this.props.onAstUpdated(updatedAst)
  }

  deleteScenario(index) {
    let updatedAst = Object.assign(this.props.ast)
    updatedAst.feature.children.splice(index, 1)
    this.props.onAstUpdated(updatedAst)
  }
}