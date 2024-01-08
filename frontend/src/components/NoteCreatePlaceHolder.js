import React from 'react'
import { Link } from "react-router-dom"

import plusSvg from '../assets/plus.svg'

const NoteCreatePlaceHolder = () => {
  return (
    <Link to={`/note/create/`}>
        <div className="note-listitem note-create-placeholder">
            <img src={plusSvg} />
        </div>
    </Link>
  )
}

export default NoteCreatePlaceHolder