import css from './styles/button.module.css'

export const Button = ({ text }) => (
  <button className={css.button}>{text}</button>
)
