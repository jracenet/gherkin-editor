import { IdGenerator } from '@cucumber/messages'

export default class GherkinAstMutator {
  static addStepAt(scenarioAst, index) {
    const newScenarioAst = Object.assign(scenarioAst),
          keyword = (newScenarioAst.steps.length > 0)? "And " : "Given ",
          newStepAst = GherkinAstMutator._newStepNode(keyword)

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


  static _newStepNode(keyword) {
    const uid = IdGenerator.uuid()
    return {
      id: uid(),
      keyword: keyword,
      location: {line: null, column: null},
      text: "",
      argument: undefined,
    }
  }
}