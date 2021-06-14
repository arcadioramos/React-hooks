import React, { useEffect, useReducer } from 'react'
import './Styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];

    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])




    

    const handleDelete = (todoId) => {
        //crear acción
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch(action)
        
    }

    const handleToogle = (todoId) => {
        dispatch(
            {
                type: 'toogle',
                payload: todoId
            }
        )
    }

    const handleAddTodo = (newTodo)=>{

        
        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className="col-7">
                    <TodoList todos={todos} handleToogle={handleToogle} handleDelete={handleDelete} />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>




            </div>

        </div>
    )
}
