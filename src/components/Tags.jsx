import css from '../styles/tags.module.css'
import { cls } from '../utils/cls.js'
import React, { useState } from 'react'

export const Tags = ({ tags, onClickRemove }) => {
  const [removeHoveredIdx, setRemoveHoveredIdx] = useState(false)

  return (
    <div className={css.tags}>
      {tags.map((tag, idx) => (
        <div
          draggable={true}
          className={cls(css.tag, idx === removeHoveredIdx && css.danger)}
          key={`${idx}`}
        >
          {tag}
          <button
            className={css.cross}
            onClick={() => onClickRemove(idx)}
            onMouseEnter={() => setRemoveHoveredIdx(idx)}
            onMouseLeave={() => setRemoveHoveredIdx(null)}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  )
}
