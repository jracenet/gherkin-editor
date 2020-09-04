import React from 'react'
import ExampleTableRender from './ExampleTableRender'

export default function({examples, onEditExamples}) {
  function editExample(newExampleAST, index) {
    examples[index] = newExampleAST
    onEditExamples(examples)
  }

  const exampleList= examples.map((example, index) => {
    return <li key={ example.id }>
      <h3>{ example.keyword }</h3>
      <ExampleTableRender example={ example } exampleIndex={ index } onEditExample={editExample}/>
    </li>
  })
  return <ul>{exampleList}</ul>
}