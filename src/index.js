// import _ from 'lodash';
import './style.css';

class Task {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.taskTitle = document.querySelector('#task-description');
    this.taskStatus = document.querySelector('#author');
    this.taskDisplay = document.querySelector('#display');
    this.buttonAdd = document.querySelector('#add');
    this.clearall = document.querySelector('#clearall');
    this.checkbox = document.querySelector('#checkbox');
    this.render();
  }

  addTask(title, status) {
    this.tasks.push({ title, status });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.render();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.render();
  }

  addTaskUpdate(index) {
    this.tasks.splice(index, 0);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.render();
  }

  removeTaskAll() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.render();
    document.querySelector('#clearall').forEach((button) => {
      button.addEventListener('click', () => {
        this.render();
      });
    });
  }

  /*   disable() {
    document.getElementById('checkbox').disabled = true;
  }

  undisable() {
    document.getElementById('checkbox').disabled = false;
  } */

  render() {
    this.taskDisplay.innerHTML = '';
    this.taskDisplay.classList.add('task_container');
    if (this.tasks.length === 0) {
      this.taskDisplay.classList.remove('task_container');
    }
    this.tasks.forEach((task, index) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <input type="checkbox" class="checkbox" id="checkbox" >  &nbsp ${task.title} &nbsp
                <button class="remove-button" data-index="${index}">Remove</button>
                <br><br>
            `;
      if (index % 2 === 0) {
        div.style.background = '#dddddd';
      } else {
        div.style.background = '#fff';
      }

      this.taskDisplay.appendChild(div);
      div.classList.add('book_list_container');
    });

    document.querySelectorAll('.remove-button').forEach((button) => {
      button.addEventListener('click', () => {
        this.removeTask(button.getAttribute('data-index'));
      });
    });

    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      checkbox.addEventListener('click', () => {
        this.addTaskUpdate();
      });
    });
  }
}

const task = new Task();

task.buttonAdd.addEventListener('click', () => {
  const title = task.taskTitle.value;
  const status = 'false';

  task.addTask(title, status);
  task.taskTitle.value = '';
  task.taskStatus.value = '';
});

task.clearall.addEventListener('click', () => {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
  this.remove();
});
