const Employee = require('../lib/employee');

describe('Employee class', () => {
    it('Collect user information for the employee', () => {
        expect(new Employee(person.name)).toBe('Hector');
        expect(new Employee(person.id)).toBe('1');
        expect(new Employee(person.email)).toBe('hector@fakeemail.com');
    });
});