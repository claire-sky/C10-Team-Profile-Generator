const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Athena', '1234', 'athena@test.com', 'athena');

    expect(engineer.github).toBe('athena');
})

test('retrieval of github', () => {
    const engineer = new Engineer('Athena', '1234', 'athena@test.com', 'athena');

    expect(engineer.getGithub()).toBe('athena');
    expect(engineer.getGithub().length).toBeGreaterThan(0);
    expect(engineer.getRole()).toBe('Engineer');
})