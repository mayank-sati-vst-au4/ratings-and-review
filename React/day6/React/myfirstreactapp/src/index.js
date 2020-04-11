import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Print extends React.Component{
     Printing= (props)=>{
        console.log('This is the targettt',props);
        return <h1>{this.props}</h1>
    }
    
        render(){
        return(
        <div>
            {console.log('checking prop values',this.props)}
            {/* Name: {this.props.children.Name},
            Date: {this.props.children.date},
            isCompleted: {this.props.children.isCompleted} */}
            <h5>
            <div>Name:{this.props.children.Name}</div>
           <div>Date:{this.props.children.date}</div>
           <div>Complete:{this.props.children.isCompleted}</div></h5>
            {/* {this.Printing} */}
        </div>
        )
    }
}
class Todo extends React.Component{
    state =
    {
        Name: "Complete the assignment 1",
        date: "15/Jan/2020",
        isCompleted: "false"
    }
    
    addTodo= e => {
        console.log('ADD Function has been clicked',e, e.target)
        this.setState({
            [e.target.Name]:  e.target.value

        })
    }
    editTodo=(e)=>{
        console.log('EDIT Function has been clicked',e.target.value)
        this.setState({
            [e.target.Name]:  e.target.value,
            [e.target.date]:  e.target.value
        })
    }
    deleteTodo(){
        console.log('DELETE Function has been clicked')
    }
    handleName= (e)=>{
        this.setState({
            Name:  e.target.value

        })
       
    }
    handleDate= (e)=>{
        this.setState({
            date:  e.target.value

        })
       
    }

    handleTask= (e)=>{
        this.setState({
            task:  e.target.value

        })
       
    }
    render(){
        return(
            <div>
        <h1>React Todo List</h1>
        <form>
        <input type="text"  onChange={this.handleName} placeholder="Enter todo name here"></input>
        <input type="date"  onChange={this.handleDate} placeholder="Enter the date here"></input>
        <button type="button" onClick={this.addTodo} onMouseOver="">Add new todo</button>
        <button onClick={this.editTodo}>Edit this todo</button>
        <button onClick={() => this.deleteTodo}>Delete the todo</button>
        </form>

        <Print>{this.state}</Print> 

        </div>
        );
    }
}



ReactDOM.render(<Todo/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*

[
        {
            Name: "Complete the assignment 1",
            date: "15/Jan/2020",
            isCompleted: "false"
        },
        {
            Name: "Complete the assignment 2",
            date: "20/Jan/2020",
            isCompleted: "true" 
        },
        {
            Name: "Complete the assignment 3",
            date: "25/Jan/2020",
            isCompleted: "false" 
        }           
    ]


     {  this.props.children.map((child, i )=> <h5 key={i}>
            <div>Name:{child.Name}</div>
           <div>Date:{child.date}</div>
           <div>Complete:{child.isCompleted}</div></h5>)}

 */