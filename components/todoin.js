import React from 'react' 
import Style from './style';

export default class TodoIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    } 

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    addTodo(todo) {
        // Ensue the todo test isn't empty
        if (todo.length > 0) {
            this.props.addTodo(todo);
            this.setState({value: ''});
        }
        
    }
 
    render(){
        return(
            <div>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button className='btn btn-success' onClick ={() => this.addTodo(this.state.value)}>Submit</button>
                <Style/>
            </div>
        );
    } 
}