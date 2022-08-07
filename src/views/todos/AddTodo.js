import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component{

    state = {
        titleTodo: ''
    }

    HandleOnChangeInput = (event) =>{
        this.setState({
            titleTodo: event.target.value
        })
    }
  
    HandleSubmit = (event) => {
        event.preventDefault();

        if(!this.state.titleTodo){
            toast.error("Missing Todo");
            return;
        }
        console.log('>>> check data input: ', this.state);
        this.props.addNewTodo({
            id: Math.floor(Math.random() * 101),
            title: this.state.titleTodo
        });

        this.setState({
            titleTodo: '',
        })

        toast.success("Add work todo success");
    }

    render(){
        return(
            <div className="add-list-todo">
                <input 
                    className="text-input" 
                    type="text" 
                    value={this.state.titleTodo}
                    onChange = {(event) => this.HandleOnChangeInput(event)}

                />
                <button 
                    className="btn btn-primary"
                    onClick={(event) => this.HandleSubmit(event)}
                
                >Add</button>
            </div>
        )
    }
}
export default AddTodo;