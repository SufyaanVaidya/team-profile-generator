// importing Employee constructor 
const Employee = require("./employee");

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole () {
        return 'Manager'
    }
}

// exporting the manager class
module.exports = Manager;