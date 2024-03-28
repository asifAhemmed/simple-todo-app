const inputField = document.getElementById('new-task');
const todoUl = document.getElementById('items');
const completeUl = document.querySelector('.complete-list ul');
const form = document.querySelector('form');

const createTask = function(task){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
};

const addTask = function(event){
    event.preventDefault();
    const listItem = createTask(inputField.value);
    todoUl.appendChild(listItem);

    inputField.value = "";
    bindInCompleteItems(listItem, completeTask);
};
const completeTask = function(){
    const listItem = this.parentNode;
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "Delete";
    listItem.appendChild(deleteBtn);

    const checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();

    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteItem);
}
const deleteItem = function(){
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
}
const bindInCompleteItems = function(listItem, complete) {
    const checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = complete;
};
const bindCompleteItems = function(listItem, dlt) {
    const button = listItem.querySelector('.delete');
    button.onclick = dlt;
};


form.addEventListener('submit', addTask);