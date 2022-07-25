import React, { Component } from 'react';
import LogIn from './LogIn';
import '../styles/login.scss';

class LogInButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>
        <button onClick={this.openModal}>Log In</button>
        <LogIn isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default LogInButton;
