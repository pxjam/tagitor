import css from '../styles/tags.module.css'
import { cls } from '../utils/cls.js'
import React, { useRef, useState } from 'react'
import { arrayMove } from '../utils/arrayMove.js'

export function Tags({ tags, onClickRemove, setTags }) {
  const [removeHoveredIdx, setRemoveHoveredIdx] = useState(false)
  const selected = useRef(null)
  const container = useRef(null)

  function dragStart(e) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', null)
    selected.current = e.target
    selected.current.style.opacity = 0.5
  }

  function dragEnd() {
    selected.current.style.opacity = 1
    selected.current = null
    // todo set tags state
    // setTags()
  }

  function dragOver(e) {
    if (!selected.current) return

    if (isBefore(selected.current, e.target)) {
      container.current.insertBefore(selected.current, e.target)
      //setTags(arrayMove(tags, ))
    } else {
      container.current.insertBefore(selected.current, e.target.nextSibling)
    }

  }

  function isBefore(el1, el2) {
    let cur
    if (el2.parentNode === el1.parentNode) {
      for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
        if (cur === el2) return true
      }
    }
    return false
  }

  return (
    <div className={css.tags} ref={container}>
      {tags.map((tag, idx) => (
        <div
          className={cls(css.tag, idx === removeHoveredIdx && css.danger)}
          draggable={idx !== removeHoveredIdx}
          onDragStart={dragStart}
          onDragEnd={dragEnd}
          onDragOver={dragOver}
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
