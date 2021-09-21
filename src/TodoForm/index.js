import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onCancel = () =>{
        setOpenModal(false)
    }
    const onSubmit = (event) =>{
        event.preventDefault(); //Con esto evitamos que el evento submit del formulario (que asctivamos cuando le damos al boton añadir), realice la accion por defecto que es recargar la pagina
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value = {newTodoValue}
                onChange={onChange}//los text area tienen una propiedad onChange que nos sirve para capturar el evento de cuando hay algun cambio como el de escribir
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className= "TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel} 
                    className="TodoForm-button TodoForm-button-cancel"
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}