const Engineer = require('../lib/engineer.js');



test('Creates object for the engineer', () => {
    const engineer = new Engineer('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'SufyaanVaidya');
    expect(engineer.github).toEqual(expect.any(String));
});
test('Collect github the engineer', () => {
    const engineer = new Engineer('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'SufyaanVaidya');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test('Collect user information for the engineer', () => {
    const engineer = new Engineer('Sufyaan', 90, 'vaidyasufyaan@gmail.com', 'SufyaanVaidya');
    expect(engineer.getRole()).toEqual('Engineer');
});