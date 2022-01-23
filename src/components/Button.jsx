import React from 'react'
import css from '../styles/button.module.css'

export const Button = ({ text, onClick }) => (
  <button className={css.button} onClick={onClick}>{text}</button>
)
