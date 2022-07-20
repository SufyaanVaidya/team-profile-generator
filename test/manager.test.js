const { number } = require('yargs');
const Manager = require('../lib/manager.js');

test('Creates object for the manager', () => {
    const manager = new Manager('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 7);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Collect the role of the intern', () => {
    const manager = new Manager('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 7);
    expect(manager.getRole()).toEqual('Manager');
});