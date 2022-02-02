import css from '../styles/tags.module.css'
import { cls } from '../utils/cls.js'
import React, { useRef, useState } from 'react'

export function Tags({ tags, onClickRemove, setTags }) {
  const [removeHoveredIdx, setRemoveHoveredIdx] = useState(false)
  const [dragItem, setDragItem] = useState()
  const container = useRef(null)

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain','')
    setDragItem(index)
  }

  const handleDragEnter = (e, index) => {
    e.target.style.opacity = '.5'
    const newTags = [...tags]
    const item = newTags[dragItem]
    newTags.splice(dragItem, 1)
    newTags.splice(index, 0, item)
    setDragItem(index)
    setTags(newTags)
  }

  const handleDragLeave = (e) => {
    e.target.style.opacity = '1'
  }

  return (
    <div className={css.tags} ref={container}>
      {tags.map((tag, idx) => (
        <div
          className={cls(css.tag, idx === removeHoveredIdx && css.danger)}
          draggable={idx !== removeHoveredIdx}
          onDragStart={(e) => handleDragStart(e, idx)}
          onDragEnter={(e) => handleDragEnter(e, idx)}
          onDragLeave={(e) => handleDragLeave(e)}
          key={`${idx}`}
        >
          {tag.value}
          <button
            className={css.cross}
            onClick={() => onClickRemove(idx)}
            onMouseEnter={() => setRemoveHoveredIdx(idx)}
            onMouseLeave={() => setRemoveHoveredIdx(null)}
            onDragStart={(e) => e.stopPropagation()}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  )
}
