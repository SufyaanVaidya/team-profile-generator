// importing Employee constructor 
const Employee = require("./employee");

// intern constructor extends employee constructor 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    // returning school from input 
    getSchool () {
        return this.school;
    }
    getRole () {
        return 'Intern';
    }
}

// exporting the intern class
module.exports = Intern;