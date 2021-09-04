import React, { Component } from 'react'

export default class ToDo extends Component {
    onToggle(){
        console.log('wtf')
    }
    render() {
        return (
            <div>
                {this.props.todo.name}
                <input onClick={this.onToggle} type="checkbox" Checked={this.props.todo.complete} ></input>
            </div>
        )
    }
}
