const { number } = require('yargs');
const Employee = require('../lib/employee.js');

describe('Employee class', () => {
    it('Collect user information for the employee', () => {
        const person = new Employee('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'Manager')
        expect(person.name).toEqual(expect.any(String));
        expect(person.id).toEqual(expect.any(Number));
        expect(person.email).toEqual(expect.any(String));
        expect(person.role).toEqual(expect.any(String)); 
    });
    
});