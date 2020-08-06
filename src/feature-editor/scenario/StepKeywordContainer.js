import React, { useState } from 'react'
import StepKeywordRender from './StepKeywordRender'

export default function(props) {
  const [keyword, setKeyword] = useState(props.keyword.slice().trim())

  function handleKeywordChange(newKeyword) {
    if (newKeyword.trim() === "") {
      setKeyword(props.keyword.slice().trim())
      return
    }

    setKeyword(newKeyword)
    props.onAnnotationChange(newKeyword)
  }

  return <>
    <StepKeywordRender keyword={ keyword } onAnnotationChange={ handleKeywordChange } />
  </>
}