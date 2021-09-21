import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    
    const {
        item : todos,
        saveItem :saveTodos,
        loading,
        error
        } = useLocalStorage('TODOS_V1', []);

    const [openModal, setOpenModal] = React.useState(false)
    //................Aqui creamos el estado de la barra de busqueda para poder actualizar la lista de todos que se renderizan, basandose en lo que se escriba en la barra..........................................
    const [searchValue, setSearchValue] = React.useState('');
    //..............Aqui filtramos los todos completados y los contamos para compararlos con los totales......................................................
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    //.........................Aqui es donde guardamos en una array nuevo los todos que muestren una coincidencia con respecto a lo que se escribio en la barra de busqueda..............................................................................
    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    //............Aqui creamos la funciones que nos permitan completar y eliminar los todos de la lista, ademas de la funcion que permita guardar esos cambios en el local storage...........................................................................................

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos);
        };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return(
        <TodoContext.Provider value = {{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
        )
}

export {TodoContext, TodoProvider}