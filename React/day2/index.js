/*      1ST WAY
 const button = (
    <button>Good</button>
);

const editButton = (
    <button>Save</button>   
);

const saveButton = (
    <button>Edit</button>
);
*/

/*  2ND WAY
const Button1 = (name, number) =>{
    return <button>{name}, {number}</button>
    }
 */

 /* const footer = (
    <div className="container-fluid p-0">
        <div className="my-footer">
        Copyright 2020
        </div>
        {button1("button", 1)}
        {button1("editButton", 2)}
        {button1("saveButton", 3)}
    </div>
); */

// THIRD WAY
const Button1 = ({name, number}) =>{
    return <button>{name}, {number}</button>
    }
// First letter in Button should always be Capital for Babel to identify it as a VALID jsx and not js. Other words are not case sensitive after first letter

/* const footer = (
    <div className="container-fluid p-0">
        <div className="my-footer">
        Copyright 2020
       
        <Button1 name="button" number="1"></Button1>
        <Button1 name="editButton" number="2"></Button1>
        <Button1 name="saveButton" number="3"></Button1>
        </div>
    </div>
);





ReactDOM.render(footer, document.getElementById("root"));
 */

// Final functional way of doing it
 const Footer = ()=> {
    return(
    <div className="container-fluid p-0">
        <div className="my-footer">
        Copyright 2020
       
        <Button1 name="button" number="1"></Button1>
        <Button1 name="editButton" number="2"></Button1>
        <Button1 name="saveButton" number="3"></Button1>
        </div>
    </div>
);
} 

//ReactDOM.render(<Footer />, document.getElementById("root"));



// Passing props here as well as way of using react dom and functional way of jsx done here.  i.e. Final Way
/* const Footer = (props)=> {
    return(
    <div className="container-fluid p-0">
        {props.children}
        <div className="my-footer">
        Copyright 2020
        {props.children}
        <Button1 name="button" number="1"></Button1>
        <Button1 name="editButton" number="2"></Button1>
        <Button1 name="saveButton" number="3"></Button1>
        </div>
    </div>
);
}

//ReactDOM.render(<Footer>Hello</Footer>, document.getElementById("root"));
 */


/*  
// 1st way of using class and there methods in react
class TodoList extends React.Component{
 abc(){
     return(
         <div>I am Mayank help me</div>
     )
 }

}
const Todo = new TodoList() // Todo is an instance of TodoList class
// todo.abc();
// Function cannot be put inside the root element either it has to be a function calls result by using Footer() or it has to be JSX

ReactDOM.render(new TodoList().abc(), document.getElementById("root"));
 */


// 2nd Way of doing classes in react
class TodoList extends React.Component{
    render(){
        return(
            <div>Using render now so directly Todolist can be written in react DOM. But one class can have
                only one render method. React dom.render is expecting only one argument and that too only render
                <Footer/>
            </div>
        )
    }
   
}

   
ReactDOM.render(<TodoList />, document.getElementById("root"));