const taskapp = () => {
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

    editTask(target) {
      const todo = localStorage.getItem('tasks');
      // eslint-disable-next-line
      const toBeEdited = target.parentElement.parentElement.firstChild.nextElementSibling.lastChild.previousElementSibling;
      // eslint-disable-next-line
      const targetededit = target.parentNode.previousElementSibling.lastElementChild.lastChild;
      toBeEdited.addEventListener('keypress', (target) => {
        if (target.key === 'Enter') {
          const id = `${new Date().getTime()}`;
          const title = toBeEdited.innerText;
          const status = false;
          // eslint-disable-next-line
          task.addTask(id, title, status);
          toBeEdited.appendChild(targetededit);
        }
        this.tasks = JSON.parse(todo);
        this.tasks.splice(target, 1);
      });
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
            <div>
              <input type="checkbox" class="checkbox" id=${task.id}>
              <span> ${task.title} </span>
            </div>
            <div>
            <button class="fa-ellipsis-v"  data-index-edit ="${task.id}">edit</i></button>
            <button class="material-symbols-outlined"  data-index="${index}">delete</button>
                      <br><br>
            </div>
                  `;
        if (index % 2 === 0) {
          ListDiv.style.background = '#dddddd';
        } else {
          ListDiv.style.background = '#fff';
        }

        this.taskDisplay.appendChild(ListDiv);
        ListDiv.classList.add('task_list_container');

        ListDiv.addEventListener('click', (event) => {
          this.editTask(event.target);

          if (event.target.classList.contains('fa-ellipsis-v')) {
            event.target.classList.remove('fa-ellipsis-v');
            event.target.classList.add('material-symbols-outlined');
            event.target.parentElement.parentElement.style.backgroundColor = '#b4d5fe';
            const targeted = event.target.parentNode.previousElementSibling.lastElementChild;
            targeted.contentEditable = 'true';
          } else if (event.target.classList.contains('material-symbols-outlined')) {
            const li = document.createElement('li');
            li.setAttribute('class', 'fa fa-sync');
          }
          const todo = localStorage.getItem('tasks');
          this.tasks = JSON.parse(todo);
        });
      });

      document.querySelectorAll('.fa-ellipsis-v').forEach((e) => {
        e.addEventListener('click', (event) => {
          this.editTask(event.target);
        });
      });
      document.querySelectorAll('.material-symbols-outlined').forEach((button) => {
        button.addEventListener('click', () => {
          this.removeTask(button.getAttribute('data-index'));
        });
      });

      document.querySelectorAll('.checkbox').forEach((checkbox) => {
        checkbox.addEventListener('click', (event) => {
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
};
export default taskapp;