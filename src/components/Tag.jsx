import React, { useState } from 'react'
import css from '../styles/tag.module.css'
import { cls } from '../utils/cls.js'

export const Tag = ({ text, onClickRemove, addClass }) => {
  const [removeHovered, setRemoveHovered] = useState(false)
  const toggleHover = () => setRemoveHovered(!removeHovered)

  return (
    <div className={cls(css.tag, addClass, removeHovered && css.danger)}>
      {text}
      <button
        className={css.cross}
        onClick={onClickRemove}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        ✖
      </button>
    </div>
  )
}
