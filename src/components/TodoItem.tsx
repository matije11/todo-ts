import React from "react"
import Todo from '../models/todo';
import classes from "./TodoItem.module.css";

type TodoItemProps = {
    item: Todo,
    onRemoveTodo: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onRemoveTodo }) => {
    return (
        <div className={classes.item}>
            <li>{item.text}</li>
            <span onClick={onRemoveTodo}>&#10005;</span>
        </div>
    )
}

export default TodoItem