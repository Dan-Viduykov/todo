import React, { FC } from 'react'
import { ITodo } from '../../core/types'
import './TodoItem.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {

  const { title, completed } = todo
  
  let classNames = 'todo-item'

  if (completed) {
    classNames = classNames + ' todo-item--completed'
  }

  return (
    <div className={classNames} >
      <p className='todo-item__title' >{title}</p>
      <div className='todo-item__buttons' >
        <button className='todo-item__btn todo-item__btn--completed' ><FontAwesomeIcon icon={faCheck} className='todo-item__btn-icon' /></button>
        <button className='todo-item__btn todo-item__btn--delete' ><FontAwesomeIcon icon={faTrash} className='todo-item__btn-icon' /></button>
      </div>
    </div>
  )
}

export default TodoItem