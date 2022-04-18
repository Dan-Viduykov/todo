import React, { FC, useEffect, useState } from 'react'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'
import { ITodo } from '../../core/types'
import TodoItem from '../TodoItem'
import './TodoList.scss'

const TodoList: FC = () => {
  const { todos, filteredChars } = useTypedSelector(state => state.todoReducer);
  const [ sortTodos, setSortTodos ] = useState(todos);

  useEffect(() => {
    const filtered = todos.filter((todo) => todo.title.slice(0, filteredChars.length) === filteredChars);
    const sort = filtered
      .sort((a, b) => (a.id > a.id ? 1 : -1))
      .sort((a) => (a.completed ? 1 : -1));
    setSortTodos(sort)
  }, [filteredChars, todos])

  const items = sortTodos.map((todo: ITodo) => {
    return (
      <li className='todo-list__item' key={todo.id}>
        <TodoItem todo={todo}/>
      </li>
    )
  })

  const message = <p className='todo-list__notification'>No Todo</p>
  const viewContent = todos.length ? items : message

  return (
    <ul className='todo-list'>
        {viewContent}
    </ul>
  )
}

export default TodoList
