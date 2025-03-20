function deleteItem(button) {
    const listItem = button.parentElement; // Selects the <li> element
    listItem.remove(); // Deletes the selected <li>
  }