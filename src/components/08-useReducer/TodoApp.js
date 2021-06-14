import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './Styles.css'
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];

    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    

   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false

        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);

        reset();
        //console.log("handle submit papi")
    }

    const handleDelete = (todoId)=>{
        //crear acción
        const action ={
            type:'delete',
            payload: todoId
        }
        
        //dispatch
        dispatch(action)
        reset();
    }

    const handleToogle = (todoId)=>{
        dispatch(
            {
                type:'toogle',
                payload: todoId
            }
        )
    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className='row'>
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className={`${todo.done && 'complete'}`}
                                    onClick={()=>handleToogle(todo.id)}
                                    >{i + 1}. {todo.desc}</p>
                                    <button className="btn btn-danger" onClick={()=>handleDelete(todo.id)}>Eliminar</button>
                                </li>

                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="description" placeholder="Aprender..." autoComplete="off" className="form-control" onChange={handleInputChange} value={description} />

                        <button type="submit" className="btn btn-outline-primary form-control">Agregar</button>
                    </form>
                </div>




            </div>

        </div>
    )
}
