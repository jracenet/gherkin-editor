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
      <span>
        <input type="text" value={this.state.value}
        name="annotation"
        list="annotations" onChange={e => this.setState({ value: e.target.value })} onBlur={this.handleChange}/>

        <datalist id="annotations">
          <select>
            <option value="Given"/>
            <option value="When"/>
            <option value="And"/>
            <option value="Then"/>
          </select>
        </datalist>
      </span>
    )
  }
}