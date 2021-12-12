const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Athena', '1234', 'athena@test.com', '24');

    expect(manager.officeNumber).toBe('24');
})

test('retrival of office number', () => {
    const manager = new Manager('Athena', '1234', 'athena@test.com', '24');

    expect(manager.getOfficeNumber()).toBe('24');
    expect(manager.getOfficeNumber().length).toBeGreaterThan(0);
})