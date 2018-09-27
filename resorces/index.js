
var ToDoList = function (name) {
  this.el = list = document.querySelector('[data-list="'+name+'"]');
  this.childs = document.querySelectorAll('[data-list="'+name+'"] li');
  this.elDone = document.querySelector('[data-listDone ="'+name+'"]');

  this.input = document.querySelector('[data-input="'+name+'"]');

  this.addEntry = function (entry) {
    var duty = document.createElement('li');
    duty.setAttribute('class', 'duties');

    var dutyPhrase = document.createElement('div');
    dutyPhrase.setAttribute('class', 'dutyPhrase');
    dutyPhrase.innerHTML = entry;

    var buttContainer = document.createElement('div');
    buttContainer.setAttribute('class', 'butContainer');
    buttContainer.innerHTML = '<button>DEL</button>';
    var delButton = buttContainer.firstChild;

    duty.appendChild(dutyPhrase);
    duty.appendChild(buttContainer);
    this.finishDuty(duty);
    this.delDuty(duty, delButton);
    this.el.appendChild(duty);
  }

  this.init = function () {
    this.addByArray([]); //없어도 상관이 없음.. 나중에 자료를 필요로 할때 쓰는것..?
    this.addByInput();
  }
}

ToDoList.prototype.addByArray = function (array) {
  this.array = array;
  var list = this;
  array.forEach(function (item){
    list.addEntry(item);
  });
}

ToDoList.prototype.addByInput = function () {
  this.input.addEventListener('keyup', function(e){
    e.preventDefault();
    if(e.keyCode === 13 && e.target.value.length > 0){
      this.addEntry(e.target.value);
      e.target.value = null;
    }
  }.bind(this));
}

ToDoList.prototype.finishDuty = function (duty) {
  duty.addEventListener('click', function (e){
  if(this.el.contains(duty) && e.target.nodeName != "BUTTON") {
    console.log(e.target.nodeName);
    this.elDone.appendChild(duty);
    duty.removeAttribute("class");
    duty.setAttribute("class", "dutiesDone");
  } else if (e.target.nodeName != "BUTTON") {
    this.el.appendChild(duty);
    duty.removeAttribute("class");
    duty.setAttribute("class", "duties");
  }
}.bind(this));
};

ToDoList.prototype.delDuty = function (duty, delButton) {
  delButton.addEventListener('click', function (e) {
    duty.remove();
  })
}

var lists = {};

lists.work = lists.work || new ToDoList('work').init();
// lists.private = lists.private || new ToDoList('private').init();

//
// var addDuties  = (function () {
//   document.getElementById('inputToDo').addEventListener('keyup', function (event){
//     if(event.keyCode === 13){
//       document.getElementById('pushButton').click();
//     }
//   });
//
//   document.getElementById('pushButton').addEventListener('click', function (){
//     if(document.getElementById('inputToDo').value.trim() !== ""){
//       var inputValue = document.getElementById('inputToDo').value;
//       var duty = document.createElement('div');
//       var dutyContainer = document.createElement('div');
//       var butContainer = document.createElement('div');
//       duty.innerText = inputValue;
//       duty.setAttribute("class", "dutyPhrase")
//       butContainer.setAttribute("class", "butContainer")
//       dutyContainer.setAttribute("class", "duties")
//       dutyContainer.appendChild(duty);
//       var butToDel = document.createElement('button');
//       butToDelSetter.call(butToDel);
//       var butToFin = document.createElement('button');
//       butToFinSetter.call(butToFin);
//       butContainer.appendChild(butToDel);
//       butContainer.appendChild(butToFin);
//       dutyContainer.appendChild(butContainer);
//       document.getElementById('toDo').appendChild(dutyContainer);
//       document.getElementById('inputToDo').value = '';
//       document.getElementById('inputToDo').focus();
//     }
//   })
// }());
//
// // add함수에서 버튼 생성 함수를 실행시키자!

// var butToFinSetter = function () {
// this.innerText = "완료";
// this.addEventListener('click', function () {
//   if(this.innerText === "완료") {
//     this.innerText = "보류";
//     $('#done').append(this.parentNode.parentNode);
//     this.parentNode.parentNode.removeAttribute("class")
//     this.parentNode.parentNode.setAttribute("class", "dutiesDone")
//   } else {
//     this.innerText = "완료";
//     document.getElementById('toDo').appendChild(this.parentNode.parentNode);
//     this.parentNode.parentNode.setAttribute("class", "duties")
//   }
// })
// };

// var butToDelSetter = function () {
//   this.innerHTML = "삭제";
//   this.addEventListener('click', function (){
//     (this.parentNode.parentNode.parentNode).removeChild(this.parentNode.parentNode)
//   })
// }


// 디오의 예시
// function TODO(text) {
//
//   this.text = text;
// }
//
// TODO.prototype.complete = function() {
//
// }
//
// TODO.prototype.delete = function() {
//
// }
//
// function TODO_LIST() {
//   this.list = [];
// }
//
// TODO_LIST.prototype.addTodo = function(text) {
//   var todo = new TODO(text);
//   this.list.push(todo);
// }
//
// var todoList = new TODO_LIST();
//
// todoList.addTodo(text);
//
// function TODOAdder(todoList) {
//   this.input = document.createElement("input");
//   this.button = document;
//
//   this.button.addEventListener('click', function() {
//     todoList.addTodo(this.input.value);
//   });
// }
//
// function TODOApp() {
//   this.currentList = new TODO_LIST();
//   this.completeList = new TODO_LIST();
//   this.todoAdder = new TODOAdder(this.currentList);
// }
//
