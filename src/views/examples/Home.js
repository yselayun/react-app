import React from "react";
import {withRouter} from 'react-router-dom';
import Color from "../HOC/Color";

import {connect} from 'react-redux';

class Home extends React.Component{

    componentDidMount(){
        // setTimeout(() => {
        //     this.props.history.push('/todo');
        // }, 3000);
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    handleDeleteUser = (user) => {
        console.log('>>> check: ', user)
        this.props.deleteUserRedux(user);
        

    }
    render(){
        let listUser = this.props.dataRedux;
        console.log('>>> check props:', listUser);
        
        return(
            <>
             <div>
                Welcome to my website
            </div>
            <div>
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <div>
                                    {index + 1} - {item.name} <button onClick={() => this.handleDeleteUser(item)}>x</button>
                                </div> 
                            </div>
                        );
                    })

                }
            </div>
            <div>
                <button onClick={() => this.handleCreateUser()}>Add New</button>
            </div>
            </>
           
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));