const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Athena', '1234', 'athena@test.com', 'Davis');
    
    expect(intern.school).toBe('Davis');
})

test('retrival of school', () => {
    const intern = new Intern('Athena', '1234', 'athena@test.com', 'Davis');

    expect(intern.getSchool()).toBe('Davis');
    expect(intern.getSchool().length).toBeGreaterThan(0);
    expect(intern.getRole()).toBe('Intern');
})