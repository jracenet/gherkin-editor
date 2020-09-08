import React from 'react'
import DatatableRowContainer from '../datatable/DatatableRowContainer'

export default function({example, exampleIndex, exampleTableActions}) {
  return <table>
    <thead>
      <tr>
        <DatatableRowContainer row={ example.tableHeader } editRow={ exampleTableActions.editExampleHeader }/>
        <td>
          <button className="btn--secondary" onClick={ exampleTableActions.addExampleColumn }>+</button>
        </td>
      </tr>
      </thead>
    <tbody>{example.tableBody.map((row, index) => {
      return <tr><DatatableRowContainer row={ row } index={ index } editRow={ exampleTableActions.editExampleRow }/></tr>
    })}</tbody>
     <tfoot>
      <tr>
        <td><button className="btn--secondary" onClick={ exampleTableActions.addExampleRow }>Add row</button></td>
      </tr>
    </tfoot>
  </table>
}