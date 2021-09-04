import React, { Component } from 'react'

export default class ToDo extends Component {
    uncheck(id){
        console.log(id)
    }
    render() {
        return (
            <div>
                {this.props.todo.name}
                <input type="checkbox" checked={this.props.todo.complete}></input>
                <button onClick={uncheck(this.props.todo.id)}>Console log the id of the current element</button>
            </div>
        )
    }
}
