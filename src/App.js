import React from 'react'
import './App.sass'
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
      "Scenario:",
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
}

export default App;
