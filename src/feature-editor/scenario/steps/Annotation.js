import React from 'react'

export default class Annotation extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: props.annotation.slice().trim()
    }
  }

  handleChange(e) {
    let newAnnotation = e.target.value

    if (newAnnotation.trim() === "") {
      this.setState({
        value: this.props.annotation.slice().trim()
      })
      return
    }

    this.setState({
      value: newAnnotation
    })

    this.props.onAnnotationChange(newAnnotation)
  }

  render() {
    return (
    <select class="gherkin-keyword"
            name="annotation"
            value={this.state.value}
            onChange={this.handleChange}>
      <option value="*">*</option>
      <option value="Given">Given</option>
      <option value="When">When</option>
      <option value="And">And</option>
      <option value="Then">Then</option>
      <option value="But">But</option>
    </select>
    )
  }
}