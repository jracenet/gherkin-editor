import React from 'react';
import Gherkin from 'gherkin'

export default class Title extends React.Component {
  constructor(props) {
    super(props)
    this.handleUpdateFeatureName = this.updateFeatureName.bind(this)
  }

  render() {
    return (
      <h1>
        {this.props.keyword}: <input defaultValue={this.props.title} onBlur={this.handleUpdateFeatureName}/>
      </h1>
    )
  }

  updateFeatureName(e) {
    this.props.updateFeatureName(e.target.value)
  }
}