import { IdGenerator } from '@cucumber/messages'

export default class GherkinAstMutator {
  static addStepAt(scenarioAst, index) {
    const newScenarioAst = Object.assign(scenarioAst),
          newStepAst = GherkinAstMutator._newStepNode()

    let stepsList = scenarioAst.steps

     if (index === parseInt(index, 10)) {
      stepsList.splice(index + 1, 0, newStepAst)
    } else {
      stepsList.push(newStepAst)
    }

    return newScenarioAst
  }

  static updateStep(stepAst, keyword, text, index) {
    const newStepAst = Object.assign(stepAst)

    if (keyword) {
      newStepAst.keyword = keyword + ' '
    }

    if (text) {
      newStepAst.text = text
    }

    return newStepAst
  }


  static _newStepNode() {
    const uid = IdGenerator.uuid()
    return {
      id: uid(),
      keyword: "* ",
      location: {line: null, column: null},
      text: "",
      argument: undefined,
    }
  }
}