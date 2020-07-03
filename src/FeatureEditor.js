import React from 'react';
import Title from './feature-editor/title/Title'
import Scenario from './feature-editor/scenario/Scenario'

export default class FeatureEditor extends React.Component {
  constructor(props) {
    super(props)
    this.onUpdateFeatureName = this.updateFeatureName.bind(this)
    this.onUpdateFeatureChild = this.updateFeatureChild.bind(this)
  }

  render() {
    const scenarioList = this.featureScenarios().map((sc, index) =>
      <Scenario scenario={sc.scenario} index={index} updateFeatureChild={this.onUpdateFeatureChild}/>
    )
    return (
      <div className="visual-editor">
        <Title keyword={this.props.ast.feature.keyword} title={this.featureName()} updateFeatureName={this.onUpdateFeatureName}/>
        <ul>
          {scenarioList}
          <button onClick={this.props.addNewScenario}>+ Add scenario</button>
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
}