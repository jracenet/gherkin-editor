import React from 'react'

export default class Text extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  render() {
    return (<span>
      <input type="text" defaultValue={this.state.text.trim()} name="text"/>
    </span>)
  }
}