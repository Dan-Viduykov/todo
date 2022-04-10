import React, { FC } from 'react'
import { ITodo } from '../../core/types'
import './TodoItem.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo, completedTodo } from '../../core/store/actions/todoActions'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { id, title, completed } = todo;

  const dispatch = useDispatch();
  
  let classNames = 'todo-item'

  if (completed) {
    classNames = classNames + ' todo-item--completed'
  }

  return (
    <div className={classNames} >
      <p className='todo-item__title' >{title}</p>
      <div className='todo-item__buttons' >
        <button
          className='todo-item__btn todo-item__btn--completed'
          onClick={() => dispatch(completedTodo(id))} >
          <FontAwesomeIcon
            icon={faCheck}
            className='todo-item__btn-icon' />
        </button>
        <button
          className='todo-item__btn todo-item__btn--delete'
          onClick={() => dispatch(deleteTodo(id))} >
          <FontAwesomeIcon
            icon={faTrash}
            className='todo-item__btn-icon' />
        </button>
      </div>
    </div>
  )
}

export default TodoItem