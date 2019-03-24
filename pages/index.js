import React, { Component } from 'react';
import Style from '../components/style'
import Header from '../components/Header'
import TodoIn from '../components/todoin';
import TodoIt from '../components/todoit';


class Index extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            todos: [],
            nextId: 3
        }
    
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }

    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    }

    
    render() {
        return (
            <div className="App">
                <div className='todo-wrapper'>
                    <Header />
                    <TodoIn todoText='' addTodo={this.addTodo} />
                    <ul>
                        {
                            this.state.todos.map((todo) => {
                                return <TodoIt todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                            })
                        }
                    </ul>
                </div>
                <Style />
            </div>
        );
    }
}

export default Index;
 