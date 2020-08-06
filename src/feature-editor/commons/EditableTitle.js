import React from 'react'

export default function(props) {
  return (
      <>
        <span className="gherkin-keyword">{ props.keyword }:</span>
        <input placeholder="Empty name" defaultValue={ props.title }
          onBlur={ (e) => props.updateTitle(e.target.value) }/>
      </>
    )
}
