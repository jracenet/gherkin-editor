import React from 'react';
import './App.css';
import FeatureEditor from './FeatureEditor'
import FeatureRenderer from './FeatureRenderer'
import Gherkin from 'gherkin'
import AstToGherkinConverter from './lib/AstToGherkinConverter'

class App extends React.Component {
  constructor(props) {
    super(props)
    const featureTxt = [
      "Feature: Shout thing",
      "",
      "Scenario: my scenario",
      "  Given a \"context\"",
      "  When I do things",
      "  Then I should see some benefits",
     ""
    ].join("\n")

    const featureAst = this.computeAst(featureTxt)

    this.state = {
      txtDefinition: featureTxt,
      ast: featureAst
    }

    this.onAstUpdated = this.updateAst.bind(this)
  }

  render() {
    return (
      <div>
        <FeatureEditor ast={this.state.ast} onAstUpdated={this.onAstUpdated} />
        <FeatureRenderer txtDefinition={this.state.txtDefinition}/>
      </div>
    )
  }

  computeAst(textDef) {
    const parser = new Gherkin.Parser(new Gherkin.AstBuilder())
    const scanner = new Gherkin.TokenScanner(textDef)
    const matcher = new Gherkin.TokenMatcher()

    return parser.parse(scanner, matcher)
  }

  updateAst(newAst) {
    const newTxtDefinition = new AstToGherkinConverter(newAst).toGherkin()

    this.setState({
      ast: newAst,
      txtDefinition: newTxtDefinition
    })
  }
}

export default App;
