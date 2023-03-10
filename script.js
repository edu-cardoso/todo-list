const taskList = document.getElementById('task-list')

function createTask(task) {
  const li = document.createElement('li')
  li.className = 'task'
  li.innerHTML = task

  const div = document.createElement('div')
  div.className = 'remove-task'

  const img = document.createElement('img')
  img.src = 'assets/x-icon.png'

  taskList.appendChild(li)
  li.appendChild(div)
  div.appendChild(img)

}

const tasks = document.getElementsByClassName('task')

function addTask() {
  const inputTask = document.getElementById('input-task')
  inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputTask.value != '' && tasks.length <= 10) {
      createTask(inputTask.value)
      stripeTask()
      removeTask()
      clearTaskList()
      clearDoneTasks()
      inputTask.value = ''
    }
  })
}

addTask()

const removeTaskBtn = document.getElementsByClassName('remove-task')
function removeTask() {
  for (let btn of removeTaskBtn) {
    btn.addEventListener('click', () => {
      const btnParent = btn.parentNode
      btnParent.remove()
    })
  }
}

function stripeTask() {
  for (let task of tasks) {
    task.addEventListener('dblclick', (e) => {
      e.target.style.textDecoration = 'line-through'
      e.target.style.backgroundColor = 'green'
      e.target.classList.add('done')
    })
  }
}

let arrOfTasks = []

function saveList() {
  const saveListBtn = document.getElementById('save-list')
  saveListBtn.addEventListener('click', () => {
    arrOfTasks = []
    for (let task of tasks) {
      setItem(task.innerText)
    }
  })
}

saveList()

function setItem(item) {
  arrOfTasks.push(item)
  setItemOnDB()
}

function setItemOnDB() {
  localStorage.setItem('tasks', JSON.stringify(arrOfTasks))
}

const savedTasks = JSON.parse(localStorage.getItem('tasks'))

function createSavedTask() {
  savedTasks.forEach((element) => {
    if (localStorage.tasks !== null) {
      createTask(element)
      stripeTask()
      removeTask()
    }
  })
}

createSavedTask()

function clearTaskList() {
  const clearListBtn = document.getElementById('clear-list')
  clearListBtn.addEventListener('click', () => {
    taskList.innerHTML = ''
    localStorage.removeItem('tasks')
  })
}

clearTaskList()

function clearDoneTasks() {
  const clearDoneTaskBtn = document.getElementById('clear-done-task')
  clearDoneTaskBtn.addEventListener('click', () => {
    const doneTasks = document.querySelectorAll('.done').forEach(e => {
      e.remove()
    })
  })
}

clearDoneTasks()





















