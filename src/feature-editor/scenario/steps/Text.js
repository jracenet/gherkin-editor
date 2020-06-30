import React from 'react'

export default class Text extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (<span>
      <input type="text" defaultValue={this.props.text.trim()} name="text" onBlur={this.handleChange}/>
    </span>)
  }

  handleChange(e) {
    this.props.onTextChange(e.target.value)
  }
}