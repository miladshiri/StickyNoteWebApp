import React from 'react'
import { useNavigate, Link } from "react-router-dom"

const NoteItemList = () => {
    const navigate = useNavigate();

    const goToNote = () => {
        navigate('/note/')
    }

  return (
    <Link to="/note/">
        <div className="note-listitem">
            <div className="note-listitem-header">
                <div className="note-listitem-title">title of the notet</div>
                <div className="note-listitem-date">2024/01/02</div>
            </div>
            <div className="note-listitem-body">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ....
            </div>
        </div>
    </Link>
  )
}

export default NoteItemList