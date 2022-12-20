function createTask(task) {
  const taskList = document.getElementById('task-list')

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

const arrOfTasks = []
const inputTask = document.getElementById('input-task')
inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputTask.value != '') {
    createTask(inputTask.value)
    arrOfTasks.push(inputTask.value)
    localStorage.setItem('tasks', JSON.stringify(arrOfTasks))
    inputTask.value = ''
  }
})


const saveTasks = JSON.parse(localStorage.getItem('tasks'))

function createSavedTask() {
  saveTasks.forEach((element) => {
    if (localStorage.tasks !== null) {
      createTask(element)
    }
  });
}

createSavedTask()

function removeTask() {
  const removeTaskBtn = document.getElementsByClassName('remove-task')
  for (let btn of removeTaskBtn) {
    btn.addEventListener('click', () => {
      const btnParent = btn.parentNode
      btnParent.remove()
    })
  }
}

removeTask()





