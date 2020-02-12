/*
Create something
Print it
Update it 
And delete it

This is CRUD which is 70-80% of almost all applications


CRUD --- Todo List ------------Requirements

1. To create new todo
 - title = Do your capstone project
 - deadline = 20 feb
 - isCompleted = false
2. You list all todos
3. You may want to change todo 
 - Do your capstone project next month
 - deadline 20/03
 - isCompleted = false
4. Delete some todo 
 */

// Input Component
class Input extends React.Component{
    state = {
        title: "",
        deadline: "",
        isCompleted: false
    }

    handleInputChange = (event) => {
        console.log("Value entered---",event.target.value);
        // this.state.title = event.target.value This will not work because in react you cannot chnage the state directly
        // This set state function is asynchronous that's why this.state consoleLog is 1 step behind event.target.value
        this.setState({
            title: event.target.value
        }, ()=>{
            console.log('this is new synchronous state title',this.state)
        });
        console.log('asynchronous state change',this.state);
    }

    
    handleDeadlineChange = (event) => {
        console.log("Value entered---",event.target.value);
        // this.state.title = event.target.value This will not work because in react you cannot chnage the state directly
        // This set state function is asynchronous that's why this.state consoleLog is 1 step behind event.target.value
        this.setState({
            deadline: event.target.value
        }, ()=>{
            console.log('this is new synchronous state date',this.state)
        });
        console.log('asynchronous state change',this.state);
    }
    sendToTodoWrapper =()=>{
        //console.log(this.props);
        this.props.sendTodoFromInput(this.state);
    }

    // onchange event will always run a callback
    // This entire process is called event binding in react
    render(){
        return(
            <div>
            <input onChange={(event) => this.handleInputChange(event)} value={this.state.title} type="text" placeholder="Title"/>
            <input onChange={(event) => this.handleDeadlineChange(event)} value={this.state.deadline} type="date" placeholder="Deadline"/>
            <button onClick={()=>this.sendToTodoWrapper()}>Submit</button>
            </div>
        );
    }
}

 // List Component
class List extends React.Component{
    render(){
        return(
            <ul>
                {/* As many LI's as there are Todos */}
            </ul>
        );
    }
}

 

 // Wrapper Component
class Wrapper extends React.Component {
    state = {
        todos: []
    }
    addTodoList = (todo) => {
        console.log("Todo is here in Wrapper", todo);
        this.setState({
            todos: [...this.state.todos, todo]

        }, (console.log('', this.state)) );
    }
    render(){
        return(
            <div>
                <Input name="Mayank" sendTodoFromInput={(todo)=> this.addTodoList(todo)}/>
                <List/>
            </div>
        )
    }
}

ReactDOM.render(< Wrapper/>, document.getElementById("root"));
