import React, { Component } from 'react'

export default class ToDo extends Component {
    onUncheck(id){
        console.log(id)
    }
    render() {
        return (
            <div>
                {this.props.todo.name}
                <input type="checkbox" defaultChecked={this.props.todo.complete}></input>
                <button onClick={this.onUncheck(this.props.todo.id)}>Console log the id of the current element</button>
            </div>
        )
    }
}
