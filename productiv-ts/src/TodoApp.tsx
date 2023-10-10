import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";
import TopTodo from "./TopTodo";
import { TodoInterface, NewTodoInterface } from "./interfaces";

interface TodoAppPropsInterface {
  initialTodos: TodoInterface[];
}

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 * - quote: inspirational quote object with text and author
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }: TodoAppPropsInterface): React.JSX.Element {
  const [todos, setTodos] = useState(initialTodos);

  console.log("TodoApp", initialTodos, todos);

  /** add a new todo to list */
  function create(newTodo: NewTodoInterface): void {
    setTodos(todos => [...todos, { id: uuid(), ...newTodo }]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo: TodoInterface): void {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    );
  }

  /** delete a todo by id */
  function remove(id: number | string): void {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-3">Todos</h3>
          {todos.length > 0
            ? <EditableTodoList
              todos={todos}
              update={update}
              remove={remove} />
            : <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">
          {todos.length > 0 && (
            <section className="mb-4">
              <h3 className="mb-3">Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          )}

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;
