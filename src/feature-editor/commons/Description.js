import React from 'react';

export default function(props) {
  return (
    <div className="description-wrapper">
      <textarea className="editable-description" placeholder="No description" defaultValue={props.description} onBlur={(e) => props.updateDescription(e.target.value)}/>
    </div>
  )
}