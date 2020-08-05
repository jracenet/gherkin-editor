import React, { useState } from 'react'

export default function(props) {
  const [keyword, setKeyword] = useState(props.annotation.slice().trim())

  function handleChange(e) {
    const newAnnotation = e.target.value

    if (newAnnotation.trim() === "") {
      setKeyword(props.annotation.slice().trim())
      return
    }

    setKeyword(newAnnotation)
    props.onAnnotationChange(newAnnotation)
  }

  return <select class="gherkin-keyword"
          name="annotation"
          value={keyword}
          onChange={handleChange}>
    <option value="*">*</option>
    <option value="Given">Given</option>
    <option value="When">When</option>
    <option value="And">And</option>
    <option value="Then">Then</option>
    <option value="But">But</option>
  </select>
}