import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  // Initialize state for the selected category, search input, and the list of display items
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [displayItems, setDisplayItems] = useState(items);

  // Event handler for changing the selected category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Event handler for changing the search input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  // Filter the items based on the selected category and the search input
  const itemsToDisplay = displayItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).filter(item => {
    return !search ? true : item.name.includes(search);
  });

  // Handle form submission
  const onItemFormSubmit = (item) => {
    setDisplayItems([...displayItems, item]);
  }

  // Render the form, filter, and the list of items
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
