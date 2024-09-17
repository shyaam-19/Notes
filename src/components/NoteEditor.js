import React, { useState, useEffect, useRef } from 'react';
import Toolbar from './Toolbar';

const NoteEditor = ({ addNote, selectedNote, updateNote,descriptionRef }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
//   const descriptionRef = useRef(null);

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDescription(selectedNote.description);
    } else {
      setTitle('');
      setDescription('');
    }

    // Focus on the description area and set the cursor to the end
    if (descriptionRef.current) {
      descriptionRef.current.focus();
      const range = document.createRange();
      range.selectNodeContents(descriptionRef.current);
      range.collapse(false); // Collapse the range to the end
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [selectedNote, descriptionRef]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    const formattedTitle = e.target.innerHTML; // Get formatted title
    if (selectedNote) {
      // Update the selected note with the formatted title
      const updatedNote = { ...selectedNote, title: formattedTitle };
      updateNote(updatedNote);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.innerHTML); // Preserve the formatted text
  };

  const handleAddOrUpdateNote = () => {
    const note = {
      id: selectedNote ? selectedNote.id : Date.now(),
      title,
      description,
    };

    if (selectedNote) {
        // setTitle(note.title);
        // setDescription(note.description);
        // descriptionRef.current.innerHTML=note.description;
    
      
      updateNote(note);
    } else {
      addNote(note);
    }

    setTitle('');
    descriptionRef.current.innerHTML='';
    setDescription('');
    // console.log(description);
  };

  return (
    <div className="note-editor">
      <Toolbar />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        contentEditable
        className="title-input"
      />
      <div
       className="editor-area"
       contentEditable
       ref={descriptionRef}
       onInput={handleDescriptionChange}
       value={description}
      />
      {/* <div
        className="editor-area"
        contentEditable
        ref={descriptionRef}
        onInput={handleDescriptionChange}
        dangerouslySetInnerHTML={{ __html: description }}
      /> */}
      <button className="add-note-btn" onClick={handleAddOrUpdateNote}>
        {selectedNote ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  );
};

export default NoteEditor;