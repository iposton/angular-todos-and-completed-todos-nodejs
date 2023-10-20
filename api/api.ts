let methods: any = {};
let todos: any = [
    {
      todo: 'fold laundry',
      completed: false
    },
    {
      todo: 'wash car',
      completed: false
    },
    {
      todo: 'get groceries',
      completed: false
    },
]

methods.getTodos = async () => {
    return todos
}

export const api = {todos: methods}