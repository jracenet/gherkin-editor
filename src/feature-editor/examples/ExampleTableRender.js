import React from 'react'
import DatatableRowContainer from '../datatable/DatatableRowContainer'

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

  return <table>
    <thead><tr><DatatableRowContainer row={ example.tableHeader } index={ 0 } editRow={ editExampleHeader }/></tr></thead>
    <tbody>{example.tableBody.map((row, index) => {
      return <tr><DatatableRowContainer row={ row } index={ index } editRow={ editExampleRow }/></tr>
    })}</tbody>
  </table>
}