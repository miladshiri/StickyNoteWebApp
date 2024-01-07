import React from 'react'
import NoteItemList from './NoteItemList';

const NotesList = () => {
  return (
    <div className="listofnotes">
        <NoteItemList />
        <NoteItemList />
        <NoteItemList />
        <NoteItemList />
    </div>
  )
}

export default NotesList