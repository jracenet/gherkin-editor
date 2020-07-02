import React from 'react'

export default class FeatureRenderer extends React.Component {
  render() {
    return <div className="text-renderer">
      <textarea value={this.props.txtDefinition} rows="20" readonly="true"/>
    </div>
  }
}