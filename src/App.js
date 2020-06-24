import React from 'react';
import './App.css';
import FeatureEditor from './FeatureEditor'
class App extends React.Component {
  constructor(props) {
    super(props)
    const featureTxt = [
      "Feature: Shout thing",
      "Scenario: my scenario",
      "  Given a \"context\"",
      "  When I do things",
      "  Then I should see some benefits",
      "Scenario Outline: my other scenario",
      "  Given some <data>"
    ]
    this.state = {
      txtDefinition: featureTxt.join("\n")
    }
  }

  render() {
    return (
      <div>
        <FeatureEditor txtDefinition={this.state.txtDefinition}/>
      </div>
    )
  }
}

export default App;
