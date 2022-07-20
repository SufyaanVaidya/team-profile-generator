const Intern = require('../lib/intern.js');

test('Creates object for the intern', () => {
    const intern = new Intern('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'UCB');
    expect(intern.github).toEqual(expect.any(String));
});
test('Collect school for the intern', () => {
    const intern = new Engineer('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'UCB');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('Collect the role of the intern', () => {
    const intern = new Engineer('Sufyaan', 90, 'vaidyasufyaan@gmail.com', "UCB");
    expect(intern.getRole()).toEqual('Intern');
});