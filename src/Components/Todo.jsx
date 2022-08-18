import React from 'react'
import { useState } from 'react'
import ListItems from './ListItems'

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)
        console.log(todoList)
        setTodo("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handleChange} type='text'></input>
            <button type='Submit'>Add</button>
        </form>
        {todoList.map((item) => (
            <h3><ListItems key={item} name={item}>List Item</ListItems></h3>
        ))}
    </div>
  )
}

export default Todo
