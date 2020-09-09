import React from 'react'
import DatatableRowContainer from '../datatable/DatatableRowContainer'
import ExampleHeaderRender from './ExampleHeaderRender'

export default function({example, exampleTableActions, exampleTableHeaderActions}) {
  return <table>
    <ExampleHeaderRender headerCells={ example.tableHeader }
      headerActions={ exampleTableHeaderActions } />

    <tbody>{example.tableBody.map((row, index) => {
      return <tr>
        <DatatableRowContainer row={ row } index={ index } editRow={ exampleTableActions.editExampleRow }/>
          <td>
            <button className="btn--secondary" onClick={ () => { exampleTableActions.removeExampleRow(index)} }>-</button>
          </td>
        </tr>
    })}</tbody>
     <tfoot>
      <tr>
        <td><button className="btn--secondary" onClick={ exampleTableActions.addExampleRow }>Add row</button></td>
      </tr>
    </tfoot>
  </table>
}