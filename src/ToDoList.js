import React, { Component } from 'react'

export default class ToDoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.length}
            </div>
        )
    }
}
