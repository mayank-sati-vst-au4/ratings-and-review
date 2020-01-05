const student = {
    name: 'Mayank',
    age: 24,
    isActive: true
}

// Convert this object into a string to be stored in local Storage

const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString);

// localStorage.setItem('student', studentObjToString);

const toJSONStudent = JSON.parse(studentObjToString);

console.log(typeof toJSONStudent);

console.log(toJSONStudent.age);