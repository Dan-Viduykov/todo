import React, { FC } from 'react'
import './TodoList.css'

import TodoItem from '../TodoItem'
import { ITodo } from '../../core/types'
import { useTypedSelector } from '../../core/hooks/useTypedSelector'

const TodoList: FC = () => {
  const todos = useTypedSelector(state => state.todo)

  const itemsList = todos?.map((todo: ITodo) => {
    return <TodoItem todo={todo} />
  })

  return (
    <ul>
      <li>
        { itemsList }
      </li>
    </ul>
  )
}

export default TodoList
