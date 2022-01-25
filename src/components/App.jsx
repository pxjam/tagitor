import autosize from 'autosize/dist/autosize.js'
import css from '../styles/app.module.css'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from './Button.jsx'
import { removeRepeatingDelimiters } from '../utils/removeRepeats.js'

import { Tags } from './Tags.jsx'
import { arrayFromString } from '../utils/arrayFromString.js'

export function App() {
  const [tags, setTags] = useState([])
  const [textTail, setTextTail] = useState('')
  const textarea = useRef(null)

  useEffect(() => {
    let savedTags = localStorage.getItem('tags') || '[]'
    setTags(JSON.parse(savedTags))
  }, [])

  useEffect(() => {
    autosize(textarea.current)
    save()
  }, [tags])

  function save() {
    localStorage.setItem('tags', JSON.stringify(tags))
  }

  function handleTextChange({ target: { value } }) {
    let textValue = value
    let tail = textValue.match(/\s*,*\s*$/)[0]

    tail = removeRepeatingDelimiters(tail)
    textValue = textValue.replace(/\s*,\s*/g, ', ')

    let tagsArray = arrayFromString(textValue)

    setTextTail(tail)
    setTags(makeTagsArray(tagsArray))
  }

  function spaceToComma() {
    const text = tagsToString(tags)
      .replace(/[\s,]+/g, ', ')

    const arr = arrayFromString(text)
    setTags(makeTagsArray(arr))
  }

  function makeTagsArray(arr) {
    return arr
      .map((item, idx) => ({
        id: idx,
        value: item.trim()
      }))
  }

  function handleBlur() {
    setTextTail('')
  }

  function handleKeyDown(e) {
    const allowedChars = /[0-9А-яЁёA-Za-z_@\-',.\s]/

    if (!allowedChars.test(e.key)) {
      e.preventDefault()
    }
  }

  function removeDuplicates() {
    let distinctTags = []
    let idx = 0
    tags.forEach((item) => {
      if (distinctTags.findIndex(i => i.value === item.value) === -1) {
        distinctTags.push({
          id: idx++,
          value: item.value
        })
      }
    })
    setTags(distinctTags)
  }

  function removeTag(idxToRemove) {
    const updatedTags = tags.filter((i, idx) => idx !== idxToRemove)
    setTags(updatedTags)
  }

  function tagsToString(tags) {
    return tags.map(i => i.value).join(', ')
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Simple Tag Editor</h1>

      <div className={css.bar}>
        <div>
          <Button text="_ > ," onClick={spaceToComma}/>
          <Button text="Clean" onClick={removeDuplicates}/>
        </div>

        <div className={css.count}>{tags.length}</div>
      </div>

      <textarea
        className={css.textarea}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        value={tagsToString(tags) + textTail}
        ref={textarea}
      />

      <Tags tags={tags} onClickRemove={removeTag} setTags={setTags}/>
    </div>
  )
}
