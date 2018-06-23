import { mount } from 'enzyme';
import React from 'react';
import Form from './Form';

export default () => {
  const driver = {
    detach() {
      driver.component.detach();
    },
    when: {
      created(props) {
        driver.component = mount(
          <Form {...props} />,
          { attachTo: document.createElement('div') }
        );
        return driver;
      },
      formEmailFilled(email) {
        return driver.get.formInput('email').simulate('change', {target: {value: email}});
      },
      formEmailSubmitted() {
        driver.get.formSubmit().simulate('click');
      }
    },
    get: {
      form() {
        return driver.component.find('[data-hook="hi-form"]');
      },
      errorText() {
        return driver.component.find('[data-hook="hi-form-input-error"]').text();
      },
      formInput(type) {
        return driver.component.find(`[data-hook="hi-form-input-${type}"]`);
      },
      formSubmit(type) {
        return driver.component.find(`[data-hook="hi-form-submit"]`);
      },
    },
    is: {
      formPresent() {
        return !!driver.component.find('[data-hook="hi-form"]').length;
      },
      errorTextPresent() {
        return !!driver.component.find('[data-hook="hi-form-input-error"]').length;
      }
    }
  };
  return driver;
};
