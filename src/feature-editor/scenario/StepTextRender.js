import React from 'react'

export default function(props) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      props.updateStepAndCreateOne(e.target.value)
    }
  }

  return <>
      <input type="text"
            defaultValue={props.text.trim()} name="text"
            onBlur={e => props.onTextChange(e.target.value)}
            onKeyDown={handleKeyDown}/>
    </>
}