export function filterTasks(tasks, filter) {
  let visibleTasks = tasks;
  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  } else if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  }
  return visibleTasks;
}
