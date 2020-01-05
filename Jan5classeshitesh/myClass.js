// Class is always singular
// Similar to function but in function we donot use keyword and parenthesis

class User{
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }
    getFullName(){
        let fullname = `This is my fullname: ${this.firstname} ${this.lastname}`;
        return fullname;
    }
    editName(newname){
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

const john = new User('Mayank', 'Sati', 44);
//console.log(john);
console.log(john.getFullName());

john.editName('Manku S')
console.log(john);
console.log(john.getFullName());
//const sammy = new User();
//console.log(sammy);
