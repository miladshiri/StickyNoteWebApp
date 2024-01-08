import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom"

import NoteItemList from '../components/NoteItemList'
import NoteCreatePlaceHolder from '../components/NoteCreatePlaceHolder'

const NotesListPage = () => {
  const navigate = useNavigate();

  let [ notes, setNotes ] = useState([])

  const goToNote = () => {
      navigate('/note/')
  }

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async() => {
    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div className="listofnotes">
      <NoteCreatePlaceHolder />
      {notes.map((note, index) => (
        <NoteItemList key={index} note={note} />
    ))}
      
  </div>
  )
}

export default NotesListPage