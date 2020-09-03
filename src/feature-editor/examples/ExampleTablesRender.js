import React from 'react'
import ExampleTableRender from './ExampleTableRender'

export default function({examples}) {
  console.log(examples)
  const exampleList= examples.map((example) => {
    return <li key={ example.id }>
      <h3>{ example.keyword }</h3>
      <ExampleTableRender example={ example }/>
    </li>
  })
  return <ul>{exampleList}</ul>
}