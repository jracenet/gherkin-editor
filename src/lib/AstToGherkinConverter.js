export default class AstToGherkinConverter {
  constructor(ast) {
    this.ast = ast
  }

  toGherkin() {
    let featurefileLines = this.handleFeatureNode(this.ast.feature)
    return this.renderAsString(featurefileLines)
  }

  handleFeatureNode(featureNode) {
    let featurePrototype = this.handleFeaturePrototype(featureNode)
    let children = this.handleFeatureChildren(featureNode.children)

    return [].concat(featurePrototype).concat(children)
  }

  handleFeaturePrototype(featureNode) {
    return [{
      location: featureNode.location,
      text: `${featureNode.keyword}: ${featureNode.name}`
    }]
  }

  handleFeatureChildren(childrenNode) {
    let childrenLines = []

    childrenNode.forEach(child => {
      let childPrototype = [{
        location: child.location,
        text: `${child.keyword}: ${child.name}`
      }]
      let steps = this.handleSteps(child.steps)
      childrenLines = childrenLines.concat(childPrototype).concat(steps)
    })


    return childrenLines
  }

  handleSteps(stepsNode) {
    let stepsLines = []

    stepsNode.forEach(step => {
      stepsLines = stepsLines.concat({
        location: step.location,
        text: `${step.keyword}${step.text}`
      })
    })
    return stepsLines
  }

  renderAsString(lines) {
    const lastLine = lines.reduce((prev, current) => (prev.location.line > current.location.line) ? prev : current)
    const fileSize = lastLine.location.line + 1
    let file = new Array(fileSize)

    lines.forEach(l => {
      let spaces = new Array(l.location.column).join(" ")
      file[l.location.line - 1] = spaces + l.text
    })

    return file.join("\n")
  }
}