import { Tag } from './Tag.jsx'
import { Button } from './Button.jsx'

let savedTags = localStorage.getItem('tags')
savedTags = JSON.parse(savedTags)

export function App(props) {
  return (
    <>
      <h1>Simple Tag Editor</h1>
      <Button text="Format"/>
      <Button text="_ > ,"/>
      <Tag/>
    </>
  )
}
