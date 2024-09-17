import React from 'react';

const Toolbar = () => {
  const applyStyle = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="toolbar">
      <button onClick={() => applyStyle('bold')}>Bold</button>
      <button onClick={() => applyStyle('italic')}>Italic</button>
      <button onClick={() => applyStyle('underline')}>Underline</button>
      <button className="color-box red" onClick={() => applyStyle('foreColor', 'red')}></button>
      <button className="color-box blue" onClick={() => applyStyle('foreColor', 'blue')}></button>
      <button className="color-box green" onClick={() => applyStyle('foreColor', 'green')}></button>
    </div>
  );
};  

export default Toolbar;



