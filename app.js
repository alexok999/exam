let addInput = document.getElementById('add-input');
let addBtn = document.getElementById('add-button');
let todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('app-todos')) || [
  { title: 'Sample first task', checked: false },
  { title: 'Sample second task', checked: false }
];

function addItem() {
  let newItem = addInput.value;
  if (newItem == '') {
    return;
  }
  todos.push({
    title: newItem,
    checked: false
  });
  saveItems(todos);
  renderList();
  addInput.value = '';
}

function removeItem(id) {
  todos.splice(id, 1);
  saveItems(todos);
  return todos;
}

function toogleItem(id) {
  todos[id].checked = !todos[id].checked;
  saveItems(todos);
}

function saveItems(todos) {
  localStorage.setItem('app-todos', JSON.stringify(todos));
}

function renderList() {
  todoList.innerHTML = '';
  todos.forEach(function(el, i) {
    let li = document.createElement('li');
    li.className = 'todo-item';
    if (el.checked) {
      li.classList.add('checked');
    }
    let checked = el.checked ? 'checked="checked"' : '';
    li.id = i;
    li.innerHTML = `
      <label class="title">  
        <input class="check-todo" type="checkbox" ${checked}>
        ${el.title}
      </label>
      <button class="delete">х</button>
    `;
    todoList.appendChild(li);
  });
}

// Add Item
addBtn.addEventListener('click', addItem);

// Remove Item
todoList.addEventListener('click', function(e) {
  if (e.target && e.target.className == 'delete') {
    e.stopPropagation;
    let parent = e.target.parentNode;
    let id = parent.id;
    removeItem(id);
    renderList();
  }
});

// Toggle Item
todoList.addEventListener('change', function(e) {
  if (e.target && e.target.className == 'check-todo') {
    e.stopPropagation;
    let li = e.target.parentNode.parentNode;
    let id = li.id;
    toogleItem(id);
    renderList();
  }
});

renderList();
