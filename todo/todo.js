// first class entities
// task -> How are we going to store task
// we need a data structure for it
// [{id: 1, text: 'hello world', completed: false}]
// Constraints: Pure functions, immutability, higher-order functions

let list = []

// operations: add, delete, markComplete and printList

function addToList(list, text) {
  return [...list, { id: list.length + 1, text: text, completed: false }]
}

function deleteById(list, id) {
  return list.filter((listItem) => listItem.id != id);
}

function markCompleteById(list, id) {
  return list.map((listItem) => {
    if (listItem.id == id) {
      return { ...listItem, completed: true }
    }
    return listItem;
  })
}

function printList(list) {
  list.forEach(element => {
    console.log('id', element.id);
    console.log('text', element.text);
    console.log('completed', element.completed);
  });
}

list = addToList(list, "Item 1");

printList(list);

list = addToList(list, "Item 2");

printList(list);

list = deleteById(list, 1);

printList(list);

list = markCompleteById(list, 2);

printList(list);
