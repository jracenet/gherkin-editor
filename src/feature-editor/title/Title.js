import React from 'react';

export default function(props) {
  return (
      <h1 class="editable-title">
        <span class="gherkin-keyword">{props.keyword}:</span>
        <input
          placeholder="Empty name"
          defaultValue={props.title}
          onBlur={(e) => props.updateFeatureName(e.target.value)}/>
      </h1>
    )
}
