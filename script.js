const inputTask = document.getElementById('input-task')
inputTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTask()
    inputTask.value = ''
  }
})

function createTask() {
  const taskList = document.getElementById('task-list')
  const li = document.createElement('li')
  li.className = 'task'
  li.innerHTML = inputTask.value
  taskList.appendChild(li)
}





