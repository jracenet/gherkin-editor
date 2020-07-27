import React from 'react';
import Title from './feature-editor/title/Title'
import Scenario from './feature-editor/scenario/Scenario'
import { IdGenerator } from '@cucumber/messages'

export default class FeatureEditor extends React.Component {
  constructor(props) {
    super(props)
    this.onUpdateFeatureName = this.updateFeatureName.bind(this)
    this.onUpdateFeatureChild = this.updateFeatureChild.bind(this)
    this.onAddNewScenario = this.createNewScenario.bind(this)
  }

  render() {
    const scenarioList = this.featureScenarios().map((sc, index) =>
      <>
        <Scenario key={sc.scenario.id} scenario={sc.scenario} index={index} updateFeatureChild={this.onUpdateFeatureChild}/>
        <button class="btn--main" onClick={() => this.onAddNewScenario(index, false)}>Add scenario</button>
        {/* <button class="btn--main" onClick={() => this.onAddNewScenario(index, true)}>Add scenario outline</button> */}
      </>
    )

    return (
      <div className="visual-editor">
        <Title keyword={this.props.ast.feature.keyword} title={this.featureName()} updateFeatureName={this.onUpdateFeatureName}/>
        <ul>
          {scenarioList}
        </ul>
      </div>
    )
  }

  featureName() {
    return this.props.ast.feature.name
  }

  featureScenarios() {
    return this.props.ast.feature.children
  }

  updateFeatureName(newName) {
    let updatedAst = Object.assign(this.props.ast)
    updatedAst.feature.name = newName

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

    updatedAst.feature.children.splice(index + 1, 0, { scenario: newScenarioAst })

    this.props.onAstUpdated(updatedAst)
  }
}