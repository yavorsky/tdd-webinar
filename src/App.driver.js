import { mount } from 'enzyme';
import React from 'react';
import App from './App';

export default () => {
  const driver = {
    detach() {
      driver.component.detach();
    },
    when: {
      created() {
        driver.component = mount(
          <App />,
          { attachTo: document.createElement('div') }
        );
        return driver;
      },
      buttonClicked() {
        driver.get.button().simulate('click');
      },
      formEmailFilled(email) {
        return driver.get.formInput('email').simulate('change', {target: {value: email}});
      },
      formEmailSubmitted() {
        driver.get.formSubmit().simulate('click');
      }
    },
    get: {
      button() {
        return driver.component.find('[data-hook="hi-button"]');
      },
      form() {
        return driver.component.find('[data-hook="hi-form"]');
      },
      title() {
        return driver.component.find('[data-hook="hi-title"]');
      },
      formInput(type) {
        return driver.component.find(`[data-hook="hi-form-input-${type}"]`);
      },
      formSubmit(type) {
        return driver.component.find(`[data-hook="hi-form-submit"]`);
      },
    },
    is: {
      buttonPresent() {
        return !!driver.component.find('[data-hook="hi-button"]').length;
      },
      titlePresent() {
        return !!driver.component.find('[data-hook="hi-title"]').length;
      },
      formPresent() {
        return !!driver.component.find('[data-hook="hi-form"]').length;
      }
    }
  };
  return driver;
};
