import React from 'react'
import Annotation from './Annotation'
import Text from './Text'

export default class Step extends React.Component {
  render() {
    return (
      <li>
          <Annotation annotation={this.props.step.keyword}/>
          <Text text={this.props.step.text} />
      </li>
    )
  }
}