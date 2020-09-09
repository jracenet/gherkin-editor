import React from 'react'
import ExampleHeaderCellsContainer from './ExampleHeaderCellsContainer'

export default function({headerCells, headerActions}) {
  return <thead>
        <tr>
          <ExampleHeaderCellsContainer row={ headerCells } headerActions={ headerActions }/>
          <td>
            <button className="btn--secondary" onClick={ headerActions.addExampleColumn }>+</button>
          </td>
        </tr>
    </thead>
}