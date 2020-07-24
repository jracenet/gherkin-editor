import React from 'react'

export default class Text extends React.Component {
  constructor(props) {
    super(props)
    this.keyDown = this.keyDown.bind(this)
  }

  componentDidMount(){
    this.input.focus()
  }

  render() {
    return (<>
      <input type="text"
            ref={(input) => { this.input = input }}
            defaultValue={this.props.text.trim()} name="text"
            onBlur={e => this.props.onTextChange(e.target.value)}
            onKeyDown={this.keyDown}/>
    </>)
  }

  keyDown(e) {
    if (e.key === 'Enter') {
      this.props.updateStepAndCreateOne(e.target.value)
    }
  }
}