import React, { Component } from 'react'

export default class ToDo extends Component {
    render() {
        return (
            <div>
                {this.props.todo.name}
                <input type="checkbox" checked={this.props.todo.complete}></input>
            </div>
        )
    }
}
