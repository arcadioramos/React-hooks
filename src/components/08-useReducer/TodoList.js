import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleToogle,handleDelete}) => {
    return (
        <ul className="list-group list-group-flush">


            {
                todos.map((todo, i) => (

                    <TodoListItem todo={todo} index={i} handleToogle={handleToogle} handleDelete={handleDelete} />

                ))
            }
        </ul>
    )
}
