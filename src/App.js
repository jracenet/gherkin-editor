import React from 'react'
import './App.scss'
import FeatureEditor from './FeatureEditor'
import FeatureRenderer from './FeatureRenderer'
import { IdGenerator } from '@cucumber/messages'
import { AstBuilder, Parser } from '@cucumber/gherkin'
import { pretty } from '@cucumber/gherkin-utils'

class App extends React.Component {
  constructor(props) {
    super(props)
    const featureTxt = [
      "Feature:",
      "",
      "  Scenario:",
      "    Given something"
    ].join("\n")

    const featureAst = this.computeAst(featureTxt)

    this.state = {
      txtDefinition: featureTxt,
      ast: featureAst
    }

    this.onAstUpdated = this.updateAst.bind(this)
    this.onAddNewScenario = this.addNewScenario.bind(this)
  }

  render() {
    return (
      <div className="l-app">
        <FeatureEditor ast={this.state.ast} onAstUpdated={this.onAstUpdated} addNewScenario={this.onAddNewScenario}/>
        <FeatureRenderer txtDefinition={this.state.txtDefinition}/>
      </div>
    )
  }

  computeAst(textDef) {
    const newId = IdGenerator.uuid()
    const parser = new Parser(new AstBuilder(newId))
    const gherkinDocument = parser.parse(textDef)
    gherkinDocument.uri = ''

    return gherkinDocument
  }

  updateAst(newAst) {
    const newTxtDefinition = pretty(newAst)

    this.setState({
      ast: newAst,
      txtDefinition: newTxtDefinition
    })
  }

  addNewScenario() {
    let newTxtDefinition = Object.assign(this.state.txtDefinition)
    let defAsArray = newTxtDefinition.split("\n")

    defAsArray.push("  Scenario: \n")
    newTxtDefinition = defAsArray.join("\n")

    this.setState({
      ast: this.computeAst(newTxtDefinition),
      txtDefinition: newTxtDefinition
    })
  }
}

export default App;
