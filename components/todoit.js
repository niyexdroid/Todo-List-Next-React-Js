import React from 'react'
import './style'

export default class TodoIt extends React.Component{
    constructor(props) {
        super(props);
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }

    render() {
        return(
            <div className='todoWrapper'>
                <button className='removeTodo' onClick={(e)=> this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text}

            </div>
        )
    }
}