import formDriver from './Form.driver';

describe('Form', () => {
  let driver;

  beforeEach(() => {
    driver = formDriver();
  })
  afterEach(() => {
    driver.detach();
  });
  it('renders without crashing', () => {
    driver.when.created();
  });

  it('renders without crashing', () => {
    driver.when.created();
    driver.when.formEmailFilled('asdsad');
    driver.when.formEmailSubmitted();
    expect(driver.get.errorText()).toBe('Email is not valid');
  });

  it('renders without crashing', () => {
    driver.when.created();
    driver.when.formEmailFilled('asdsad@asd.com');
    driver.when.formEmailSubmitted();
    expect(driver.is.errorTextPresent()).toBeFalsy();
  });
});
