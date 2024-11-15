import React, { useState } from "react";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  const [showUndo, setShowUndo] = useState(false);

  
  const addItem = (item) => {
    const confirmAdd = window.confirm("Are you sure you want to add this item?");
    if (confirmAdd) {
      setItems([...items, item]);
    }
  };


  const deleteItem = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      const deletedItem = items[index];
      setDeletedItems([...deletedItems, deletedItem]);
      setItems(items.filter((_, i) => i !== index));
      setShowUndo(true);
    }
  };

  
  const undoDelete = () => {
    if (deletedItems.length > 0) {
      const lastDeleted = deletedItems.pop();
      setItems([...items, lastDeleted]);
      setDeletedItems(deletedItems);
      setShowUndo(false);
    }
  };

  return (
    <div className="App">
      <h2>React Item List App</h2>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
      
      {showUndo && (
        <button className="undo-button" onClick={undoDelete}>
          Undo Delete
        </button>
      )}
    </div>
  );
}

export default App;
