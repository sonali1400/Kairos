import React, { useState } from "react";
import _ from "lodash";
import 'font-awesome/css/font-awesome.min.css';
import { TODO_PLACEHOLDER, TODO_TITLE, SAVE_TASK, DONE } from "../Constants";

export default function Todo() {
    const [todoText, setTodoText] = useState('')
    const [todoTextList, setTodoTextList] = useState([])
    const handleTodoTextList = (e) => {
        if (!_.isEmpty(e.target.value)) {
            setTodoTextList([...todoTextList, e.target.value]);
        }
        setTodoText('')
    }
    const handleRemoveTodoText = (index) => {
        const updatedArray = todoTextList.filter((_, id) => id !== index)
        setTodoTextList(updatedArray)
    }

    return (
        <div className="gray-wrap large-margin">
            <h1 className="title"><i class="fa fa-spinner fa-spin"></i>{TODO_TITLE} :</h1>
            <div className='input-wrap'>
                <p className="text-blue">Task: </p>
                <input className="todoText" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder={TODO_PLACEHOLDER} />
                <button className="add" value={todoText} onClick={handleTodoTextList} >{SAVE_TASK}</button>
            </div>
            <div className='task-wrap'>
                {_.map(todoTextList, (todo, index) =>
                    <li className="todo-li" key={index}>
                        <p className="brown-text" >{index + 1}.</p>
                        <p className="todo-showText" >{todo}</p>
                        <button className="remove" value={todo} onClick={() => handleRemoveTodoText(index)}>{DONE}</button>
                    </li>)}
            </div>

        </div>
    )
}