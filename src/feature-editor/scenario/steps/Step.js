import React from 'react'
import Annotation from './Annotation'
import Text from './Text'
import GherkinAstMutator from 'lib/GherkinAstMutator'

export default class Step extends React.Component {
  constructor(props) {
    super(props)
    this.onAnnotationChange = this.editStepAnnotation.bind(this)
    this.onTextChange = this.editStepText.bind(this)
    this.updateStepAndCreateOne = this.updateStepAndCreateOne.bind(this)
  }

  render() {
    return (
      <li class="step" data-index={this.props.index}>
        <Annotation annotation={this.props.step.keyword} onAnnotationChange={this.onAnnotationChange} />
        <Text text={this.props.step.text} onTextChange={this.onTextChange} updateStepAndCreateOne={this.updateStepAndCreateOne}/>
      </li>
    )
  }

  editStepAnnotation(keyword) {
    const newStepAst = GherkinAstMutator.updateStep(this.props.step, keyword, null, this.props.index)
    this.props.onEditStep(newStepAst, this.props.index)
  }

  editStepText(text) {
    const newStepAst = GherkinAstMutator.updateStep(this.props.step, null, text, this.props.index)
    this.props.onEditStep(newStepAst, this.props.index)
  }

  updateStepAndCreateOne(text) {
    const updatedStepAst = GherkinAstMutator.updateStep(this.props.step, null, text, this.props.index)
    this.props.onEditAndAddStep(updatedStepAst, this.props.index)
  }
}