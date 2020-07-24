import React from 'react';

export default class Title extends React.Component {
  constructor(props) {
    super(props)
    this.handleUpdateFeatureName = this.updateFeatureName.bind(this)
  }

  render() {
    return (
      <h1 class="editable-title">
        <span class="gherkin-keyword">{this.props.keyword}:</span>
        <input placeholder="Empty name" defaultValue={this.props.title} onBlur={this.handleUpdateFeatureName}/>
      </h1>
    )
  }

  updateFeatureName(e) {
    this.props.updateFeatureName(e.target.value)
  }
}