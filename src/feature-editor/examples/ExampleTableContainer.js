import React from 'react'
import ExampleTableRender from './ExampleTableRender'
import { IdGenerator } from '@cucumber/messages'

export default function({example, exampleIndex, onEditExample}) {
  const exampleTableActions = {
    editExampleHeader(newRowAST) {
      let mutableExampleAST = {...example }
      mutableExampleAST.tableHeader = newRowAST
      onEditExample(mutableExampleAST, exampleIndex)
    },

    editExampleRow(newRowAST, index) {
      let mutableExampleAST = {...example }
      mutableExampleAST.tableBody[index] = newRowAST
      onEditExample(mutableExampleAST, exampleIndex)
    },

    addExampleRow() {
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

      example.tableBody.push(newRow)
      onEditExample(example, exampleIndex)
    },

    addExampleColumn() {
      example.tableHeader.cells.push({
        value: ""
      })

      example.tableBody.forEach((row) => {
        row.cells.push({
          value: ""
        })
      })

      onEditExample(example, exampleIndex)
    }
  }

  return <ExampleTableRender example={ example } exampleTableActions={ exampleTableActions } />
}