import React, { FC } from 'react'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'
import { ITodo } from '../../core/types'
import TodoItem from '../TodoItem'
import './TodoList.scss'

const TodoList: FC = () => {

  const todos = useTypedSelector(state => state.todoReducer.todos);

  const items = todos.map((todo: ITodo) => {
    return (
      <li className='todo-list__item' key={todo.id}>
        <TodoItem todo={todo}/>
      </li>
    )
  })

  return (
    <ul className='todo-list'>
      {todos.length !== 0 ? items : <p className='todo-list__notification'>No Todo</p>}
    </ul>
  )
}

export default TodoList
