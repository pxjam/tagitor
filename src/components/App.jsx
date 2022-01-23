import React, { useEffect, useRef, useState } from 'react'
import { Tag } from './Tag.jsx'
import { Button } from './Button.jsx'
import { removeRepeatingDelimiters } from '../utils/removeRepeats.js'
import { tagsArrayFromString } from '../utils/tagsArrayFromString.js'
import autosize from 'autosize/dist/autosize.js'
import css from '../styles/app.module.css'

export function App() {
  const [tags, setTags] = useState([])
  const [textTail, setTextTail] = useState('')
  const textarea = useRef(null)

  useEffect(() => {
    let savedTags = localStorage.getItem('tags') || '[]'
    setTags(JSON.parse(savedTags))
  }, [])

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

  useEffect(() => {
    autosize(textarea.current)
    save()
  }, [tags])

  const removeTag = (idxToRemove) => {
    const tagsWithoutIt = tags.filter((i, idx) => idx !== idxToRemove)
    setTags(tagsWithoutIt)
  }

  return (
    <>
      <h1>Simple Tag Editor</h1>

      <Button text="_ > ," onClick={spaceToComma}/>

      <textarea
        className={css.textarea}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        value={tags.join(', ') + textTail}
        ref={textarea}
      />

      {tags.map((tag, idx) =>
        <Tag key={`${idx}`} text={tag} onClickRemove={() => removeTag(idx)}/>
      )}
    </>
  )
}
