import React from 'react'
import DatatableRowContainer from '../datatable/DatatableRowContainer'
import { IdGenerator } from '@cucumber/messages'

export default function({example, exampleIndex, onEditExample}) {

  function editExampleHeader(newRowAST) {
    let mutableExampleAST = {...example }
    mutableExampleAST.tableHeader = newRowAST
    onEditExample(mutableExampleAST, exampleIndex)
  }

  function editExampleRow(newRowAST, index) {
    let mutableExampleAST = {...example }
    mutableExampleAST.tableBody[index] = newRowAST
    onEditExample(mutableExampleAST, exampleIndex)
  }

  function addExampleRow() {
    let newRowLength = example.tableHeader.cells.length
    let newRow = {
      id: IdGenerator.uuid(),
      cells: []
    }

    for (let cellIndex = 0; cellIndex < newRowLength; cellIndex++) {
      newRow.cells.push({
        value: ""
      })
    }

    console.log(example)
    example.tableBody.push(newRow)
    onEditExample(example, exampleIndex)
  }

  return <table>
    <thead><tr><DatatableRowContainer row={ example.tableHeader } editRow={ editExampleHeader }/></tr></thead>
    <tbody>{example.tableBody.map((row, index) => {
      return <tr><DatatableRowContainer row={ row } index={ index } editRow={ editExampleRow }/></tr>
    })}</tbody>
     <tfoot>
      <tr>
        <td><button className="btn--secondary" onClick={ addExampleRow }>Add row</button></td>
      </tr>
    </tfoot>
  </table>
}