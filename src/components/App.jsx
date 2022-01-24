import autosize from 'autosize/dist/autosize.js'
import css from '../styles/app.module.css'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from './Button.jsx'
import { removeRepeatingDelimiters } from '../utils/removeRepeats.js'
import { tagsArrayFromString } from '../utils/tagsArrayFromString.js'
import { Tags } from './Tags.jsx'
import { arrayUnique } from '../utils/arrayUnique.js'

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

  const save = () => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }

  const handleTextChange = ({ target: { value } }) => {
    let textValue = value
    let tail = textValue.match(/\s*,*\s*$/)[0]

    tail = removeRepeatingDelimiters(tail)
    textValue = textValue.replace(/\s*,\s*/g, ', ')

    let tagsArray = tagsArrayFromString(textValue)

    setTextTail(tail)
    setTags(tagsArray)
  }

  const spaceToComma = () => {
    const text = tags
      .join(', ')
      .replace(/[\s,]+/g, ', ')

    setTags(tagsArrayFromString(text))
  }

  const handleBlur = () => setTextTail('')

  const handleKeyDown = (e) => {
    const allowedChars = /[0-9А-яЁёA-Za-z_@\-',.\s]/

    if (!allowedChars.test(e.key)) {
      e.preventDefault()
    }
  }

  const removeDuplicates = () => setTags(arrayUnique(tags))

  const removeTag = (idxToRemove) => {
    const updatedTags = tags.filter((i, idx) => idx !== idxToRemove)
    setTags(updatedTags)
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
        value={tags.join(', ') + textTail}
        ref={textarea}
      />

      <Tags tags={tags} onClickRemove={removeTag} setTags={setTags}/>
    </div>
  )
}
