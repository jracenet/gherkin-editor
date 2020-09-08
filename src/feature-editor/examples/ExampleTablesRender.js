import React from 'react'
import ExampleTableContainer from './ExampleTableContainer'

export default function({examples, onEditExamples}) {
  function editExample(newExampleAST, index) {
    examples[index] = newExampleAST
    onEditExamples(examples)
  }

  const exampleList= examples.map((example, index) => {
    return <li key={ example.id }>
      <h3>{ example.keyword }</h3>
      <ExampleTableContainer example={ example } exampleIndex={ index } onEditExample={editExample}/>
    </li>
  })
  return <ul>{exampleList}</ul>
}