import React from 'react';

export default function(props) {
  return (
    <div class="description-wrapper">
      <textarea class="editable-description" placeholder="No description" defaultValue={props.description} onBlur={(e) => props.updateDescription(e.target.value)}/>
    </div>
  )
}