import React from 'react'
import EditableTitle from './feature-editor/commons/EditableTitle'
import Description from './feature-editor/commons/Description'
import ScenarioContainer from './feature-editor/scenario/ScenarioContainer'

export default function(props) {
  let scenariosList = null,
      scenarioActions = props.scenarioActions

  if (props.featureChildren.length > 0) {
    const scenarioComponents = props.featureChildren.map((sc, index) =>
      <>
        <ScenarioContainer
          key={ sc.scenario.id }
          scenario={ sc.scenario }
          index={ index }
          updateFeatureChild={ scenarioActions.updateFeatureChild }
          onDeleteScenario={ scenarioActions.deleteScenario }
        />

        <button className="tiles-list__gutter-action btn--main"
          onClick={() => scenarioActions.createNewScenario(index, false)}>
          +
        </button>
      </>
    )

    scenariosList = <ul className="tiles-list">
        <button className="tiles-list__gutter-action btn--main"
          onClick={() => scenarioActions.createNewScenario(":first", false)}>+</button>
        { scenarioComponents }
      </ul>
  } else {
    scenariosList = <>
      <button className="btn--main" onClick={() => scenarioActions.createNewScenario(0, false)}>Add a first scenario</button>
    </>
  }

  return <div className="visual-editor">
            <h1 className="editable-title">
              <EditableTitle
                keyword={ props.keyword }
                title={ props.name }
                updateTitle={ props.updateFeatureName }/>
            </h1>
            <Description description={ props.description } updateDescription={ props.updateFeatureDescription } />
            { scenariosList }
          </div>
}