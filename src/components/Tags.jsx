import React, { useEffect, useRef } from 'react'
import css from '../styles/tags.module.css'
import { Tag } from './Tag.jsx'

export const Tags = ({ tags, onClickRemove }) => {
  const positions = useRef({})
  const positionsRef = positions.current

  const onDrag = (idx, left, top) => {
    console.log('drag', idx, left, top)
  }

  const onChildRender = (idx, left, top) => {
    positionsRef[idx] = { left, top }
    console.log(positionsRef)
  }

  useEffect(() => {

  }, [])

  return (
    <div className={css.tags}>
      {tags.map((tag, idx) => {
        return (
          <Tag
            key={`${idx}`}
            text={tag}
            onClickRemove={() => onClickRemove(idx)}
            addClass={css.tag}
            onDrag={(left, top) => onDrag(idx, left, top)}
            onResize={(left, top) => onChildRender(idx, left, top)}
          />
        )
      })}
    </div>
  )
}
