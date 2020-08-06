import React from 'react'

export default function(props) {
  return <select class="gherkin-keyword"
          name="annotation"
          value={ props.keyword }
          onChange={(e) => { props.onAnnotationChange(e.target.value) }}>
    <option value="*">*</option>
    <option value="Given">Given</option>
    <option value="When">When</option>
    <option value="And">And</option>
    <option value="Then">Then</option>
    <option value="But">But</option>
  </select>
}