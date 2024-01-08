import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from "react-router-dom"

const NotePage = () => {
  const navigate = useNavigate();

  let [ note, setNote ] = useState([])

  const handleBodyChange = (value) => {
    setNote(note => ({...note, 'body': value}))
  }

  const handleTitleChange = (value) => {
    setNote(note => ({...note, 'title': value}))
  }

  const createNote = async() => {
    fetch('/api/note-create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

  return (
    <div className="note-page">
      <div className="stickynote">
        <div className="stickynote-header">
            <input onChange={(e) => (handleTitleChange(e.target.value))} className="stickynote-title" maxLength="50" defaultValue={note.title} placeholder='Type title here ...'></input>
            <div className="stickynote-date">
                A new Stickynote
            </div>
        </div>
        <textarea onChange={(e) => (handleBodyChange(e.target.value))} className="stickynote-body" placeholder='Enter the body here ...'
            value={note.body}
        >
        </textarea>
        <div className="stickynote-footer">
            <button onClick={createNote} className="button stickynote-done">Done</button>
            <button className="button stickynote-cancel"><Link to='/'>Cancel</Link></button>
        </div>
      </div>
    </div>
  )
}

export default NotePage