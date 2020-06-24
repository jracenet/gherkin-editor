import React from 'react';
import Gherkin from 'gherkin'
import Title from './feature-editor/title/Title'
import Scenario from './feature-editor/scenario/Scenario'

export default class FeatureEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ast: this.computeAst() }
  }

  render() {
    const scenarioList = this.featureScenarios().map((sc) =>
      <Scenario scenario={sc}/>
    )
    return (
      <div>
        <Title title={this.featureTitle()}/>
        <ul>
          {scenarioList}
        </ul>
      </div>
    )
  }

  computeAst() {
    const parser = new Gherkin.Parser(new Gherkin.AstBuilder())
    const scanner = new Gherkin.TokenScanner(this.props.txtDefinition)
    const matcher = new Gherkin.TokenMatcher()

    return parser.parse(scanner, matcher)
  }

  featureTitle() {
    return this.state.ast.feature.name
  }

  featureScenarios() {
    return this.state.ast.feature.children
  }
}