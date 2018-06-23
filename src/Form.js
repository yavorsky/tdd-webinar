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
    if (validateEmail(email)) {
      if (this.props.onFormSubmit) {
        this.props.onFormSubmit({ email });
      }
    } else {
      this.setState({ error: 'Email is not valid' });
    }
  }
  render() {
    return (
      <form data-hook="hi-form">
        <span data-hook="hi-form-description">Please, fill the form</span>
        <input data-hook="hi-form-input-email" value={this.state.email} onChange={this.handleEmailChange} />
        {this.state.error && <span data-hook="hi-form-input-error">{this.state.error}</span>}
        <div data-hook="hi-form-submit" onClick={this.handleSubmit}>Submit</div>
      </form>
    )
  }
}
