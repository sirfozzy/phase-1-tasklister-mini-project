document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handlesSubmit)
});

function handlesSubmit(event) {
  event.preventDefault();

  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target.description.value;
  taskList.append(task);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
});
task.appen(deleteButton);

event.target.reset();
}