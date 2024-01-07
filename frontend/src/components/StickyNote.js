import React from 'react'
import { useNavigate, Link } from "react-router-dom"

const StickyNote = () => {
    const navigate = useNavigate();

    const bodyChanged = () => {}

  return (
    <div className="stickynote">
        <div className="stickynote-header">
            <input className="stickynote-title" maxLength="50" defaultValue="title of the notet"></input>
            <span className="stickynote-date">2024/01/02</span>
        </div>
        <textarea onChange={bodyChanged} className="stickynote-body"
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        >
        </textarea>
        <div className="stickynote-footer">
            <button className="button stickynote-delete">Delete</button>
            <button className="button stickynote-done">Done</button>
            <button className="button stickynote-cancel"><Link to='/'>Cancel</Link></button>
        </div>
    </div>
  )
}

export default StickyNote

