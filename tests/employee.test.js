const Employee = require('../lib/employee');

describe('Employee class', () => {
    it('Collect user information for the employee', () => {
        expect(new Employee(person.name).getName('Hector'));
        expect(new Employee(person.id).getId('1'));
        expect(new Employee(person.email).getEmail('hector@fakeemail.com'));
        expect(new Employee(person.role).getRole('Employee'));
    });
});