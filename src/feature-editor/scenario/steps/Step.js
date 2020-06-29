import React from 'react'
import Annotation from './Annotation'
import Text from './Text'

export default class Step extends React.Component {
  constructor(props) {
    super(props)

    this.handleAnnotationChange = this.handleAnnotationChange.bind(this)
    this.state = {
      step: props.step
    }
  }

  handleAnnotationChange(annotation) {
    let updatedStep = {}
    Object.assign(updatedStep, this.props.step)
    updatedStep.keyword = annotation + ' '
    this.setState({step: updatedStep})

    console.log(this.state.step)
  }

  render() {
    return (
      <li>
          <Annotation annotation={this.state.step.keyword} onAnnotationChange={this.handleAnnotationChange} />
          <Text text={this.state.step.text} />
      </li>
    )
  }
}