// Class is always singular
// Similar to function but in function we donot use keyword and parenthesis

class User{
    constructor(firstname, lastname, credit, middlename){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
        this.middlename = middlename;
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
    addMiddleName(middlename){
        const fullname = middlename.split(' ');
        console.log('New name for adding middlename',fullname);
        this.middlename = fullname[1];
        console.log(`Updated name: ${this.firstname}  ${this.middlename}  ${this.lastname}`);
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

john.addMiddleName('Mayank Chandra Sati');