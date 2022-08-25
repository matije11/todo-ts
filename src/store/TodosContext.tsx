import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextProps = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextProps>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})


const TodosContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos((prev) => {
            return prev.concat(newTodo)
        })
    }

    const removeTodoHandler = (id: string) => {
        setTodos((prev) => {
            return prev.filter(item => item.id !== id)
        })
    }

    const contextValue: TodosContextProps = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    )
}


export default TodosContextProvider