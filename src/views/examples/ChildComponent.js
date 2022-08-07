import React from "react";

class ChildComponent extends React.Component{
    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        });
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }
    render() {
        console.log('>>> check props' , this.props);
        let {arrJob} = this.props;
        let {showJob} = this.state;
        //let check = showJob === true ? 'showJob = true' : 'showJob = false'; 
        
        return(
            <>
                { showJob === false ? 
                    <div><button className="btn" onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                        <>
                            <div className="job-lists">
                                {
                                    arrJob.map((item, index) => {
                                        
                                            return(
                                                <div key={item.id}>
                                                    {item.title} - {item.salary} $ <></> 
                                                    <button onClick={() => this.handleOnClickDelete(item)}>x</button>
                                                </div>
                                            )

                                    })
                                }
                            </div>
                            <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        </>
                }
                
            </>
            
        );
    }
}
export default ChildComponent;