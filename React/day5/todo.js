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

    /* componentDidUpdate = () => {
        console.log(this.props);
        if(this.props.isEdit===true){
            this.setState(this.props.editTodoData)
        }

    } */
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
            {/* <button onClick={()=>this.sendToTodoWrapper()}>Submit</button> */}
            <button onClick={()=>this.props.sendTodoFromInput(this.state)}>Submit</button>
            </div>
        );
    }
}

 // List Component
class List extends React.Component{
    render(){
        console.log(this.props.todos)
        return(
            <ul>
                {/* As many LI's as there are Todos */}
                {this.props.todos.map((todo, index) => {
                    return(
                    <li key={index}>{todo.title}, {todo.deadline}, {todo.isCompleted.toString()}
                    <button onClick={()=> this.props.editTodo(index)}>Edit</button>
                    <button onClick={()=> this.props.deleteTodo(index)}>Delete</button>
                    </li>
                    );
                })}
            </ul>
        );
    }
}

 

 // Wrapper Component
class Wrapper extends React.Component {
    state = {
        todos: [
            {
                title: "First",
                deadline: "2020-01-00",
                isCompleted: false
            },
            {
                title: "Second",
                deadline: "2020-01-00",
                isCompleted: false
            },
            {
                title: "Third",
                deadline: "2020-01-00",
                isCompleted: false
            },
        ],
        isEdit: false,
        editTodoIndex: "",
        editTodoData: ""
    }
    addTodoList = (todo) => {
        console.log("Todo is here in Wrapper", todo);
        this.setState({
            todos: [...this.state.todos, todo]

        }/* , (console.log('wrapper', this.state))  */);
    }

    deleteTodoFromList = (index) =>{
        let newTodos = this.state.todos.slice();
        newTodos.splice(index,1);
        this.setState({
            todos: newTodos
        });
    }

    editTodoInList = (index)=> {
        this.setState({
            isEdit: true,
            editTodoIndex: index,
            editTodoData: this.state.todos[index]

        })
    }

    render(){
        return(
            <div>
                <Input sendTodoFromInput={(todo)=> this.addTodoList(todo)}/>
                <List todos={this.state.todos} deleteTodo ={(index)=> this.deleteTodoFromList(index)} editTodo = {(index)=>this.editTodoInList(index)}/>
            </div>
        )
    }
}

ReactDOM.render(< Wrapper/>, document.getElementById("root"));
