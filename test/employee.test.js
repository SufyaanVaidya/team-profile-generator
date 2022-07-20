
const Employee = require('../lib/employee.js');

test('Collect user information for the employee', () => {
        const person = new Employee('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'Manager');
        expect(person.name).toEqual(expect.any(String));
        expect(person.id).toEqual(expect.any(Number));
        expect(person.email).toEqual(expect.any(String));
        expect(person.role).toEqual(expect.any(String)); 
    });
    
test('get the employees name', () => {
    const person = new Employee('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'Manager');
    expect(person.getName()).toEqual(expect.any(String));
});
test('get the employees id', () => {
    const person = new Employee('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'Manager');
    expect(person.getId()).toEqual(expect.any(Number));
});
test('get the employees email', () => {
    const person = new Employee('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'Manager');
    expect(person.getEmail()).toEqual(expect.any(String));
});
test('get the employees role', () => {
    const person = new Employee('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'Manager');
    expect(person.getRole()).toEqual(expect.any(String));
});