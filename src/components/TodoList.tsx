import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import {useAtom} from 'jotai'
import {newTodoAtom, addTodoAtom, todosAtom, removeTodoAtom, toggleTodoAtom, updateTodoAtom} from "../store";

function TodoListItems() {
    const [todos] = useAtom(todosAtom)
    const [, removeTodo] = useAtom(removeTodoAtom)
    const [, toggleTodo] = useAtom(toggleTodoAtom)
    const [, updateTodo] = useAtom(updateTodoAtom)

  return (
    <>
      {todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => toggleTodo({id: todo.id})}/>
          <Input mx={2} value={todo.text} onClick={() => updateTodo({id: todo.id, text: todo.text})}/>
          <Button onClick={() => removeTodo({id: todo.id})}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
