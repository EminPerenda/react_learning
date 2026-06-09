const todos = [
  { id: 1, task: "Learn JavaScript", completed: false },
  { id: 2, task: "Practice React", completed: true },
  { id: 3, task: "Build a project", completed: false },
];

const todoByid = todos.find(
  (todo) => todo.completed == false && todo.task == "Build a project",
);
console.log(todoByid);
console.log("Array Filter:");

const completedTodos = todos.filter((todo) => todo.completed);
console.log(completedTodos);

console.log("Array ForEach:");
todos.forEach((todo) => {
  todo.completed = true;
  console.log(todo.completed);
});
console.log("Array Map: ");
const mappedTodos = todos.map((todo) => {
  return {
    id: todo.id,
    desc: todo.task,
  };
});
console.log(mappedTodos);
