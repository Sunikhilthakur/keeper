import React from "react";
import { FaTimes } from 'react-icons/fa'; // For Delete icon


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <FaTimes /> {/* Use FaTimes instead of DeleteIcon */}
      </button>
    </div>
  );
}

export default Note;
