import React from 'react'
import { useNavigate, Link } from "react-router-dom"

const NoteItemList = ({ note }) => {
    const navigate = useNavigate();

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString()
    }

  return (
    <Link to={`/note/${note.id}/`}>
        <div className="note-listitem">
            <div className="note-listitem-header">
                <div className="note-listitem-title">{note.title}</div>
                <div className="note-listitem-date">{formatDate(note.update_date)}</div>
            </div>
            <div className="note-listitem-body">
                {note.body.slice(0, 100)}
            </div>
        </div>
    </Link>
  )
}

export default NoteItemList