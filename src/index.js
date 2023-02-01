// import _ from 'lodash';
// import './style.css';

class Task {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.taskTitle = document.querySelector('#task-description');
    this.taskStatus = document.querySelector('#author');
    this.taskDisplay = document.querySelector('#display');
    this.buttonAdd = document.querySelector('#add');
    this.clearall = document.querySelector('#clearall');
    this.checkboxStatus = document.querySelector('#checkboxid');
    this.render();
  }

  addTask(id, title, status) {
    this.tasks.push({ id, title, status });
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

  myCheckbox(target) {
    this.tasks.forEach((task) => {
      if (target.id === task.id) {
        if (target.checked) {
          task.status = true;
        } else {
          task.status = false;
        }
      }
    });

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    // this.render()
  }

  render() {
    this.taskDisplay.innerHTML = '';
    this.taskDisplay.classList.add('task_container');
    if (this.tasks.length === 0) {
      this.taskDisplay.classList.remove('task_container');
    }

    this.tasks.forEach((task, index) => {
      const ListDiv = document.createElement('div');
      ListDiv.innerHTML = `
      <input type="checkbox" class="checkbox" id=${task.id}>  &nbsp ${task.title} &nbsp
                <button class="remove-button"  data-index="${index}">Remove</button>
                <br><br>
            `;
      if (index % 2 === 0) {
        ListDiv.style.background = '#dddddd';
      } else {
        ListDiv.style.background = '#fff';
      }

      this.taskDisplay.appendChild(ListDiv);
      ListDiv.classList.add('book_list_container');
    });

    document.querySelectorAll('.remove-button').forEach((button) => {
      button.addEventListener('click', () => {
        this.removeTask(button.getAttribute('data-index'));
      });
    });

    document.querySelectorAll('.checkbox').forEach((checkbox) => {
      checkbox.addEventListener('click', () => {
        this.myCheckbox(event.target);
      });
    });

    document.querySelectorAll('.clear-completed-task').forEach((button) => {
      button.addEventListener('click', () => {
        this.tasks = this.tasks.filter((tasklist) => !tasklist.status);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        const completedElements = document.querySelectorAll('.checkbox');
        completedElements.forEach((element) => element.remove());
      });
    });
  }
}

const task = new Task();

task.buttonAdd.addEventListener('click', () => {
  const id = `${new Date().getTime()}`;
  const title = task.taskTitle.value;
  const status = false;
  task.addTask(id, title, status);
  task.taskTitle.value = '';
  task.taskStatus.value = '';
});
