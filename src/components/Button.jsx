import React from 'react'
import css from '../styles/button.module.css'

export function Button({ text, onClick }) {
  return (
    <button className={css.button} onClick={onClick}>{text}</button>
  )
}
