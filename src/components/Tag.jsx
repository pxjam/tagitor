import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import css from '../styles/tag.module.css'

export const Tag = ({ text, onClickRemove, addClass, onDrag, onResize }) => {
  const [removeHovered, setRemoveHovered] = useState(false)
  const ref = useRef(null)
  const isDragging = useRef(false)

  useEffect(() => {
    addEventListener('resize', resize)
    return () => removeEventListener('resize', resize)
  })

  const resize = () => {
    const { left, top } = ref.current.getBoundingClientRect()
    onResize(left, top)
  }

  const handleTouchStart = ({ target }) => {
    isDragging.current = true

    addEventListener('mouseup', handleTouchEnd, { once: true })
    addEventListener('touchend', handleTouchEnd, { once: true })
  }

  const handleTouchMove = ({ target }) => {
    if (!isDragging.current) return
    const { left, top } = target.getBoundingClientRect()
    onDrag(left, top)
  }

  const handleTouchEnd = () => {
    isDragging.current = false
    // console.log('handleTouchEnd')
    // console.log('isDragging.current', isDragging.current)
  }

  // window.addEventListener('touchend', () => handleTouchEnd)

  const toggleHover = () => setRemoveHovered(!removeHovered)

  return (
    <div
      className={`${removeHovered && css.danger} ${css.tag} ${addClass}`}
      onTouchStart={handleTouchStart}
      onMouseDown={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
      // onMouseUp={handleTouchEnd}
      ref={ref}
    >
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
