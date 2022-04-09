import React, { FC } from 'react'
import TodoItem from '../TodoItem'
import './TodoList.scss'

const TodoList: FC = () => {

  const todo1 = {
    userId: 1,
    id: 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloremque?',
    completed: false
  }
  const todo2 = {
    userId: 1,
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    completed: false
  }

  return (
    <ul className='todo-list'>
      <li className='todo-list__item'>
        <TodoItem todo={todo1}/>
      </li>
      <li className='todo-list__item'>
        <TodoItem todo={todo2}/>
      </li>
    </ul>
  )
}

export default TodoList
