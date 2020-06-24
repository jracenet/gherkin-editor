import React from 'react'

export default class Scenario extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.step)
  }

  render() {
    return (
      <li>{this.step()}</li>
    )
  }

  step() {
    return `${this.props.step.keyword} ${this.props.step.text}`
  }
}