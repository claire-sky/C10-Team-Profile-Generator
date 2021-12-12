const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Athena', '1234', 'athena@test.com');

    expect(employee.name).toBe('Athena');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('athena@test.com');
});

test('retrival of name, id, email, and role', () => {
    const employee = new Employee('Athena', '1234', 'athena@test.com');

    expect(employee.getName()).toBe('Athena');
    expect(employee.getName().length).toBeGreaterThan(0);
    expect(employee.getId()).toBe('1234');
    expect(employee.getEmail()).toBe('athena@test.com');
    expect(employee.getEmail()).toContain('@');
    expect(employee.getRole()).toBe('Employee');
});