import React, { useState } from 'react'
import css from '../styles/tag.module.css'

export const Tag = ({ text, onClickRemove, addClass }) => {
  const [removeHovered, setRemoveHovered] = useState(false)

  const toggleHover = () => setRemoveHovered(!removeHovered)

  return (
    <div className={`${removeHovered && css.danger} ${css.tag} ${addClass}`}>
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
