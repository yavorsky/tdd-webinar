import { email } from './validate';

describe('Validation', () => {
  it('should validate email correctly', () => {
    expect(email('aaa@aaa.com')).toBe(true);
    expect(email('aaa@ddd.com')).toBe(true);
    expect(email('d@ddd.com')).toBe(true);
    expect(email('asdsad@asd.com')).toBe(true);
  });

  it('should not validate incorrect email', () => {
    expect(email('aaa.com')).toBe(false);
    expect(email('aaa@com')).toBe(false);
    expect(email('aaacom')).toBe(false);
  });
});
