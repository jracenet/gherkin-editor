import React from 'react'

export default class Annotation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      annotation: props.annotation
    }
  }
  render() {
    return (
      <span>
        <input type="text" defaultValue={this.state.annotation.trim()} name="annotation" list="annotations"/>

        <datalist id="annotations">
          <select>
            <option value="Given"/>
            <option value="When"/>
            <option value="And"/>
          </select>
        </datalist>
      </span>
    )
  }
}