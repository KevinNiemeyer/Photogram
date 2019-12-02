import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 35%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-top: 37px;
  background-color: black;
`;

const Container2 = styled.div`
  position: relative;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Close = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  color: white;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Container>
        <Container2>
          <Img src={this.props.photo} alt='nada' />

          <Close
            onClick={e => {
              this.onClose(e);
            }}>
            &times;
          </Close>
        </Container2>
      </Container>
    );
  }
}

export default Modal;
