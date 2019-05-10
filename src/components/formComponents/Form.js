import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render () {
    return (
      <form>
        <input
          name='firstName'
          placeholder='First Name'
          value={this.state.firstName}
          onChange={e => this.handleChange(e)}
        />
        <input
          name='lastName'
          placeholder='Last Name'
          value={this.state.lastName}
          onChange={e => this.handleChange(e)}
        />
        <input
          name='phoneNumber'
          placeholder='Phone Name'
          value={this.state.phoneNumber}
          onChange={e => this.handleChange(e)}
        />

        <button onClick={(e) => this.onSubmit(e)}> Submit</button>
      </form>
    )
  }
}

export default Form;
