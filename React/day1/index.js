const rootElement = document.getElementById("root");

console.log("See index.js is working");
const hello = document.createElement("span");
hello.textContent="Hello World";

const button = document.createElement("button");
button.textContent = "Waiting to be clicked";
button.addEventListener("click", function(){
    hello.textContent ="Hello Mayank";
})

rootElement.appendChild(button);
rootElement.appendChild(hello);