import React, { FC } from 'react'
import { ITodo } from '../../core/types'
import './TodoItem.css'

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {

  const { userId, id, title, completed } = todo

  return <div />
}

export default TodoItem
