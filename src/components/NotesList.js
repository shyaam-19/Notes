import React from 'react';

const NotesList = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <div key={note.id} className="note">
          <h3>{note.title}</h3>
          <div className="note-content" dangerouslySetInnerHTML={{ __html: note.description }} />
          <button className="edit-btn" onClick={() => editNote(note)}>Edit</button>
          <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
