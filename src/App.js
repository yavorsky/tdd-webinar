import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  state = {
    form: {},
    started: false,
  };

  handleFormSubmit = ({ email }) => {
    const { form } = this.state;
    this.setState({ form: {
      ...form,
      email,
    }});
  }
  render() {
    return (
      <div className="App">
        {!this.state.started &&
          <div data-hook="hi-button" onClick={() => {this.setState({ started: true })}}>Start</div>
        }
        {this.state.form.email && <h1 data-hook="hi-title">Hi, {this.state.form.email}</h1>}
        {this.state.started && <Form onFormSubmit={this.handleFormSubmit} />}
      </div>
    );
  }
}

export default App;
