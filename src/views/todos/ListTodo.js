import React from "react";
import '../../styles/todoStyle.scss';
import AddTodo from "./AddTodo";

import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ListTodo extends React.Component{
    state = {
        listTodo: [
            { id: 'todo1', title: 'Doing Homework'},
            { id: 'todo2', title: 'Learning React'},
            { id: 'todo3', title: 'Fixing Bug'},
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        });
    }
    handleDelTodo = (todo) =>{
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo,
        });

        toast.success('Delete Success');
    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        })
    }
    handleEditTodo = (todo) =>{
        let {editTodo, listTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo : {}
            })
            return;
        }
        console.log(todo)
        this.setState({
            editTodo: todo
        })

    }

    render(){
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;


        return(
            <>
                <div>
                    <p>
                        App Todo by me
                    </p>
                    <br/>
                </div>
                <div className="list-todo-container">
                    <AddTodo 
                        addNewTodo = {this.addNewTodo}
                    />
                    <div className="list-todo-content">
                            { listTodo && listTodo.length > 0 &&
                                listTodo.map((item, index) => {
                                    return (
                                        <div key={item.id} className="todo-child">
                                            
                                               
                                                {isEmptyObj === true ?
                                                <>
                                                    <span> {index + 1} - {item.title}</span> 
                                                </> 
                                                :
                                                
                                                <>
                                                       { editTodo.id === item.id ?
                                                       <>
                                                            <span>
                                                            {index + 1} - <input 
                                                                                    className="text-input"
                                                                                    type="text" 
                                                                                    value={editTodo.title}
                                                                                    onChange={(event) => this.handleOnChangeEditTodo(event)}

                                                                                />

                                                            </span>
                                                        </>
                                                        :
                                                        <>
                                                            <span>{index + 1} - {item.title}</span>
                                                            
                                                        </>

                                                           
                                                    }
                                                </>
                                                
                                                }
                                                <button className={isEmptyObj === false && editTodo.id === item.id ? 'btn btn-save' : 'btn btn-edit'} onClick={() => this.handleEditTodo(item)}>
                                                    
                                                { isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}
                                                    
                                                </button>
                                                <button className="btn btn-delete" onClick={() => this.handleDelTodo(item)}>Delete</button>
                                    
                                            
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                <ToastContainer />
            </>
        );
    }
}

export default ListTodo