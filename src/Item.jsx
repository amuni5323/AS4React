import React, { useState } from "react";

function Item({ item, index, deleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEditChange = (e) => {
    setEditedItem(e.target.value);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    if (editedItem.trim()) {
      item = editedItem;
      setIsEditing(false);
    } else {
      alert("Item cannot be empty!");
    }
  };

  return (
    <li className="item">
      {isEditing ? (
        <input
          type="text"
          value={editedItem}
          onChange={handleEditChange}
        />
      ) : (
        <span>{item}</span>
      )}

      <div className="item-actions">
        <button onClick={toggleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteItem(index)}>Delete</button>
      </div>

      {isEditing && (
        <button onClick={saveEdit}>
          Save
        </button>
      )}
    </li>
  );
}

export default Item;
