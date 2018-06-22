import getDriver from './App.driver';

describe('App', () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
  })
  afterEach(() => {
    driver.detach();
  });
  it('renders without crashing', () => {
    driver.when.created();
  });
  it('renders with Register button', () => {
    driver.when.created();
    expect(driver.is.buttonPresent()).toBeTruthy();
  });

  it('not renders with Register form', () => {
    driver.when.created();
    expect(driver.is.formPresent()).toBeFalsy();
  });

  it('not renders title after form was submitted', () => {
    driver.when.created();

    expect(driver.is.titlePresent()).toBeFalsy();
  });

  it('renders with input form after button clicked', () => {
    driver.when.created();
    driver.when.buttonClicked();

    expect(driver.get.form()).toBeTruthy();
  });

  it('renders title after form was submitted', () => {
    driver.when.created();
    driver.when.buttonClicked();
    driver.when.formEmailFilled('aaa@ddd.com');
    driver.when.formEmailSubmitted();

    expect(driver.is.titlePresent()).toBeTruthy();
  });
});
