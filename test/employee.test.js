const Employee = require('../lib/employee.js');

describe('Employee class', () => {
    it('Collect employee name', () => {
        expect(new Employee(person.name).getName('Hector'));
    });
    it('Collect employee id', () => {
        expect(new Employee(person.id).getId('1'));
    });
    it('Collect employee email', () => {
        expect(new Employee(person.email).getEmail('hector@fakeemail.com'));
    });
    it('Collect employee role', () => {
        expect(new Employee(person.role).getRole('Employee'));
    });
});