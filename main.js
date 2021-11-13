// TESTS //
// 1.   Сравнивает по ссылке, а не по значению

// 2.   В коде ошибка

// 3.   В коде ошибка

// 4.   Вася

// 5.   Ошибка: переменная f не определена

// 6.   Выведет 5

// 7.   Будет ошибка

// 8.   True

// 9.   Да, все корректно

// 10.  Будет ошибка

// 11.  Выведет 1

// 12.  User.__proto__

// 13.   Выведет false

// 14.  5 значений 10 15 20 25 30

// 15.  NO

// 16.  let number = 12,5

// 17.  Равняется 9

// 18.  НЕТ

// 19.  В первом выражении ошибка

// 20.  Глобальная, Функциональная



// PRACTICE


// Создать простой ToDo List. – 15 баллов
// Поле для добавления описания задачи
// Блок, в котором будут отображаться все задачи
// Возможность удаления задачи из списка



let taskInput = document.getElementById('newTask');
let addButton = document.getElementById('addtolist');
let myTasks = document.getElementById('listToDo');

let createNewTask = function(taskText){
    let listItem = document.createElement('li');
    let addBtn = document.createElement('addingbtn');
    let deleteBtn = document.createElement('button');

    label.innerText = taskText;
    editInput.type = 'text';
    editBtn.innerText = 'EDIT'
    editBtn.className = 'editbtn';



    listItem.appendChild(editInput);
    listItem.appendChild(editBtn);
    listItem.appendChild(addBtn);
    return listItem;
}

let addTask = function(){
    console.log('add task');
}


function addItem(){
    if(Submit.value != 'submit'){
        console.log('he');
    }
}
 
