
function TODO(name) {
  this.el = list = document.querySelector('[data-list="'+name+'"]');
  this.elDone = document.querySelector('[data-listDone ="'+name+'"]');
}

TODO.prototype.completeDuty = function(duty) {
  duty.addEventListener('click', function (e){
  if(this.el.contains(duty) && e.target.nodeName != "BUTTON") {
    this.elDone.appendChild(duty);
    duty.removeAttribute("class");
    duty.setAttribute("class", "dutiesDone");
  } else if (e.target.nodeName != "BUTTON") {
    this.el.appendChild(duty);
    duty.removeAttribute("class");
    duty.setAttribute("class", "duties");
  }
}.bind(this));
}

TODO.prototype.deleteDuty = function(duty, delButton) {
  delButton.addEventListener('click', function (e) {
    duty.remove();
  })
}

function TODO_LIST(text) {
  this.duty = document.createElement('li');
  this.duty.setAttribute('class', 'duties');

  this.dutyPhrase = document.createElement('div');
  this.dutyPhrase.setAttribute('class', 'dutyPhrase');
  this.dutyPhrase.innerText = text;

  this.buttContainer = document.createElement('div');
  this.buttContainer.setAttribute('class', 'butContainer');
  this.buttContainer.innerHTML = '<button>DEL</button>';

  this.delButton = this.buttContainer.firstChild;
}

TODO_LIST.prototype.addTodo = function(name) {
  var todo = new TODO(name);
  this.duty.appendChild(this.dutyPhrase);
  this.duty.appendChild(this.buttContainer);
  todo.completeDuty(this.duty);
  todo.deleteDuty(this.duty, this.delButton);
  todo.el.appendChild(this.duty);
}

function TODOAdder(name) {
  this.input = document.querySelector('[data-input="'+name+'"]');
  this.name = name;
}

TODOAdder.prototype.addByInput = function () {
  this.input.addEventListener('keyup', function(e){
    e.preventDefault();
    if(e.keyCode === 13 && e.target.value.length > 0){
      this.todoList = new TODO_LIST(this.input.value);
      this.todoList.addTodo(this.name);
      this.input.value = null;
    }
  }.bind(this));
}

function TODOApp(name) {
  this.todoAdder = new TODOAdder(name);
  this.todoAdder.addByInput();
}

var lists = {};
lists.work = lists.work || new TODOApp('work');
