import React, { Component } from 'react'

export default class ToDo extends Component {
    onToggle = () => {
        this.props.toggleToDo(this.props.todo.id)
    }
    render() {
        return (
            <div>
                {this.props.todo.name}
                <input onChange={this.onToggle}  type="checkbox" checked={this.props.todo.complete} ></input>
            </div>
        )
    }
}
