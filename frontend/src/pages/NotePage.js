import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from "react-router-dom"

const NotePage = () => {
  const navigate = useNavigate();

  const { noteId } = useParams()

  let [ note, setNote ] = useState([])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
  }

  useEffect(() => {
    getNote()
  }, [])

  const getNote = async() => {
    const response = await fetch(`/api/notes/${noteId}/`)
    const data = await response.json()
    setNote(data)
  }

  const updateNote = async() => {
    fetch(`/api/notes/${noteId}/update/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

  const deleteNote = async() => {
    fetch(`/api/notes/${noteId}/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    navigate('/')
  }

  const handleBodyChange = (value) => {
    setNote(note => ({...note, 'body': value}))
  }

  const handleTitleChange = (value) => {
    setNote(note => ({...note, 'title': value}))
  }

  return (
    <div className="note-page">
      <div className="stickynote">
        <div className="stickynote-header">
            <input onChange={(e) => (handleTitleChange(e.target.value))}  className="stickynote-title" maxLength="50" value={note.title}></input>
            <div className="stickynote-date">
              <span>Last modified: </span>
              <span>{formatDate(note.update_date)}</span>
              <span> | </span>
              <span>Created: </span>
              <span>{formatDate(note.create_date)}</span>
            </div>
        </div>
        <textarea onChange={(e) => (handleBodyChange(e.target.value))} className="stickynote-body"
            value={note.body}
        >
        </textarea>
        <div className="stickynote-footer">
            <button onClick={deleteNote} className="button stickynote-delete">Delete</button>
            <button onClick={updateNote} className="button stickynote-done">Done</button>
            <button className="button stickynote-cancel"><Link to='/'>Cancel</Link></button>
        </div>
      </div>
    </div>
  )
}

export default NotePage