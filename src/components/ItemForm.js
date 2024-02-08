import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {
  // Initialize state for the form inputs
  const [category, setCategory] = useState("Produce"); // State for the category input
  const [name, setName] = useState(""); // State for the name input
  const newItem = {
    id: uuid(), // Generate a unique ID for the new item
    name: name, // Set the name for the new item
    category: category // Set the category for the new item
  }

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault(); // Prevent the default form submission
    onItemFormSubmit(newItem); // Call the onItemFormSubmit function with the new item
  }
  
  // Render the form
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => setName(e.target.value)}/> {/* Input field for the name */}
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setCategory(e.target.value)}> {/* Dropdown for the category */}
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button> {/* Submit button for the form */}
    </form>
  );
}

export default ItemForm;