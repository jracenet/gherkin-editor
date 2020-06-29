import React from 'react'

export default class Annotation extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onAnnotationChange(e.target.value)
  }

  render() {
    return (
      <span>
        <input type="text" defaultValue={this.props.annotation.trim()}
        name="annotation"
        list="annotations" onBlur={this.handleChange}/>

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