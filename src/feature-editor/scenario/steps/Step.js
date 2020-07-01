import React from 'react'
import Annotation from './Annotation'
import Text from './Text'

export default class Step extends React.Component {
  constructor(props) {
    super(props)

    this.onAnnotationChange = this.editStepAnnotation.bind(this)
    this.onTextChange = this.editStepText.bind(this)
  }

  render() {
    return (
      <li>
          <Annotation annotation={this.props.step.keyword} onAnnotationChange={this.onAnnotationChange} />
          <Text text={this.props.step.text} onTextChange={this.onTextChange}/>
      </li>
    )
  }

  editStepAnnotation(annotation) {
    const newStepAst = Object.assign(this.props.step)
    newStepAst.keyword = annotation + ' '
    this.props.onEditStep(newStepAst, this.props.index)
  }

  editStepText(text) {
    const newStepAst = Object.assign(this.props.step)
    newStepAst.text = text
    this.props.onEditStep(newStepAst, this.props.index)
  }
}