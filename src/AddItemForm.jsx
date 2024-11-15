import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addItem(input);
      setInput("");
    } else {
      alert("Please enter a non-empty item!"); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Item Form</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter new item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
