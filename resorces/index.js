//
// let res = [1,2,3];
// for(var i=0)
// {
//   res[i] += 10;
// }
//
// res.map(i => {
//   return i + 10;
// }).map(i => i*10)
//
// 
// function TODO(text) {
//   // contructor
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












var addDuties  = (function () {
  document.getElementById('inputToDo').addEventListener('keyup', function (event){
    if(event.keyCode === 13){
      document.getElementById('pushButton').click();
    }
  });

  document.getElementById('pushButton').addEventListener('click', function (){
    if(document.getElementById('inputToDo').value.trim() !== ""){
      var inputValue = document.getElementById('inputToDo').value;
      var duty = document.createElement('div');
      var dutyContainer = document.createElement('div');
      var butContainer = document.createElement('div');
      duty.innerText = inputValue;
      duty.setAttribute("class", "dutyPhrase")
      butContainer.setAttribute("class", "butContainer")
      dutyContainer.setAttribute("class", "duties")
      dutyContainer.appendChild(duty);
      var butToDel = document.createElement('button');
      butToDelSetter.call(butToDel);
      var butToFin = document.createElement('button');
      butToFinSetter.call(butToFin);
      butContainer.appendChild(butToDel);
      butContainer.appendChild(butToFin);
      dutyContainer.appendChild(butContainer);
      document.getElementById('toDo').appendChild(dutyContainer);
      document.getElementById('inputToDo').value = '';
      document.getElementById('inputToDo').focus();
    }
  })
}());

// add함수에서 버튼 생성 함수를 실행시키자!

var butToFinSetter = function () {
this.innerText = "완료";
this.addEventListener('click', function () {
  if(this.innerText === "완료") {
    this.innerText = "보류";
    document.getElementById('done').appendChild(this.parentNode.parentNode);
    this.parentNode.parentNode.removeAttribute("class")
    this.parentNode.parentNode.setAttribute("class", "dutiesDone")
  } else {
    this.innerText = "완료";
    document.getElementById('toDo').appendChild(this.parentNode.parentNode);
    this.parentNode.parentNode.setAttribute("class", "duties")
  }
})
};

var butToDelSetter = function () {
  this.innerHTML = "삭제";
  this.addEventListener('click', function (){
    (this.parentNode.parentNode.parentNode).removeChild(this.parentNode.parentNode)
  })
}
