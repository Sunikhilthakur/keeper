import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"; // Import React Icon

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent default form submission
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <button
          style={{
            borderRadius: "50%",
            padding: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={submitNote}
        >
          <FaPlusCircle />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
