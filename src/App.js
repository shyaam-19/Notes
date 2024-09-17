import React, { useState, useEffect,useRef } from 'react';
import NoteEditor from './components/NoteEditor';
import NotesList from './components/NotesList';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    setSelectedNote(null);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (note) => {
    // console.log(note);
    descriptionRef.current.innerHTML=note.description;
    setSelectedNote(note);
  };

  return (
    <div className="app-container">
      <h1>Spd Notes</h1>
      <NoteEditor addNote={addNote} updateNote={updateNote} selectedNote={selectedNote} descriptionRef={descriptionRef} />
      <NotesList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
};

export default App;
