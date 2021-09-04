import React, { Component } from 'react'
import ToDo from './ToDo'

export default class ToDoList extends Component {
    render() {
        return (
            this.props.todos.map(todo => {
                return <ToDo key={todo.id} todo = {todo}/>
            })
        )
    }
}
