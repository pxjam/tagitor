import { Tag } from './Tag.jsx'
import { Button } from './Button.jsx'
import css from './styles/app.module.css'

let savedTags = localStorage.getItem('tags')
savedTags = JSON.parse(savedTags)

export function App() {
  return (
    <>
      <h1>Simple Tag Editor</h1>
      <textarea className={css.textarea}>{}</textarea>
      <Button text="Format"/>
      <Button text="_ > ,"/>
      <Tag/>
    </>
  )
}
