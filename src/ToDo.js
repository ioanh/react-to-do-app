import React, { Component } from 'react'

export default class ToDo extends Component {
    render() {
        return (
            <div>
                {this.props.todo.name}
                <input type="checkbox" Checked={this.props.todo.complete} onClick={this.props.toggleToDo(this.props.todo.id)}></input>
            </div>
        )
    }
}
