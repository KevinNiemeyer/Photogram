import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`;
const Img = styled.img``;

const Close = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  color: white;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;
export class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    console.log(this.props);
    return (
      <Container>
        <Img src={this.props.photo} alt='nada' />

        <Close
          onClick={e => {
            console.log('test');
            this.onClose(e);
          }}>
          &times;
        </Close>
      </Container>
    );
  }
}

export default Modal;
