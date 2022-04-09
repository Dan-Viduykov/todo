import React, { FC } from 'react'
import './App.scss'

import TodoList from '../TodoList'
import Header from '../Header'
import InputAddTodo from '../InputAddTodo'
import InputSearch from '../InputSearch'

const App: FC = () => {
  return (
    <main className='main'>
      <div className='wrap'>
        <Header />
        <div className='inputs'>
          <InputAddTodo />
          <InputSearch />
        </div>
        <TodoList />
      </div>
    </main>
  )
}

export default App
