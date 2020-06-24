import React from 'react';
import Gherkin from 'gherkin'

export default class Title extends React.Component {
  render() {
    return (
      <h1>
        {this.props.title}
      </h1>
    )
  }
}