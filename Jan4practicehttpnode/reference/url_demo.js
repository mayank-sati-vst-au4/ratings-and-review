const url = require('url');

const myUrl = new URL('http://mywebste.com/hello.html?id=100&status=active');

// SERIALISED URL

console.log(myUrl.href);
console.log(myUrl.toString());

// HOST ROOT DOMAIN

console.log(myUrl.host);

// HOSTNAME  does not include the port

console.log(myUrl.hostname);

// PATHNAME

console.log(myUrl.pathname());

// SERIALISED QUERY

console.log(myUrl.search);

// PARAMS OBJECT

console.log(myUrl.searchParams);

// ADD PARAMS
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// LOOP THROUGH PARAMS

myUrl.searchParams.forEach((value, name)=> console.log(`Name is this ${name} and value is this ${value}`));


