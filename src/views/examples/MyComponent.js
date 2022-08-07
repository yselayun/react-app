import React from "react";
import ChildComponent from './ChildComponent';
import AddComponent from "./AddComponent";


class MyComponent extends React.Component {
    
    state = {
        
        arrJob: [
            { id: '1', title: 'Developer', salary: 500},
            { id: '2', title: 'Tester', salary: 400},
            { id: '3', title: 'Manager', salary: 700},
    
        ]
    }
   
    addNewJob = (job) => {
        console.log(job);
        // let currentJob = this.state.arrJob;
        // currentJob.push(job);
        this.setState({
            arrJob: [...this.state.arrJob, job]
            // arrJob: currentJob,
        });
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob,
        })
    }
    render() {
        console.log('>>> render state:' , this.state);
        return(
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                    
                />
                <ChildComponent 
                    arrJob = {this.state.arrJob}
                    deleteAJob = {this.deleteAJob}
                />
            </>
        );
    }
}
export default MyComponent;