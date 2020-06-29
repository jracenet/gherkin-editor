import AstToGherkinConverter from './AstToGherkinConverter'
import Gherkin from 'gherkin'

let subject, ast, featureTxt

beforeEach(() => {
  featureTxt = [
      "",
      "Feature: Shout thing",
      "",
      "  Scenario: my scenario",
      "    Given a \"context\"",
      "    When I do things",
      "    Then I should see some benefits",
      "",
      "  Scenario Outline: my other scenario",
      "    Given some <data>",
      ""
    ].join("\n")

  ast = computeAst()
  subject = new AstToGherkinConverter(ast)
})

test('handle feature prototype', function() {
  expect(subject.handleFeaturePrototype(ast.feature)).toEqual([
    {
      location: {line: 2, column: 1},
      text: "Feature: Shout thing"
    }
  ])
})

test('handle feature children', function() {
  expect(subject.handleFeatureChildren(ast.feature.children)).toEqual([
    {
      location: {line: 4, column: 3},
      text: "Scenario: my scenario"
    },
    {
      location: {line: 5, column: 5},
      text: "Given a \"context\""
    },
    {
      location: {line: 6, column: 5},
      text: "When I do things"
    },
    {
      location: {line: 7, column: 5},
      text: "Then I should see some benefits"
    },
    {
      location: {line: 9, column: 3},
      text: "Scenario Outline: my other scenario"
    },
    {
      location: {line: 10, column: 5},
      text: "Given some <data>"
    }
  ])
})

test('renders feature', function() {
  expect(subject.toGherkin()).toEqual(featureTxt)
})

function computeAst() {
  const parser = new Gherkin.Parser(new Gherkin.AstBuilder())
  const scanner = new Gherkin.TokenScanner(featureTxt)
  const matcher = new Gherkin.TokenMatcher()

  return parser.parse(scanner, matcher)
}
