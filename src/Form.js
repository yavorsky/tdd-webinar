import React, { Component } from 'react'
import { email as validateEmail } from './validate';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }
  handleSubmit() {
    const { email } = this.state;
    if (this.props.onFormSubmit && validateEmail(email)) {
      this.props.onFormSubmit({ email });
    }
  }
  render() {
    return (
      <form data-hook="hi-form">
        <span data-hook="hi-form-description">Please, fill the form</span>
        <input data-hook="hi-form-input-email" value={this.state.email} onChange={this.handleEmailChange} />
        <div data-hook="hi-form-submit" onClick={this.handleSubmit}>Submit</div>
      </form>
    )
  }
}
