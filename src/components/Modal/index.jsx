import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: fixed;
  border: solid black 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 35%;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.45);
  transition: 0.3s;
`;

const Container2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const Img = styled.img`
  display: block;
  opacity: 1;
  ${props =>
    props.landscape
      ? css`
          width: 80vw;
        `
      : css`
          height: 80vh;
        `}
`;

const Close = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
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
      <Container id='container1'>
        <Container2 id='container2'>
          <Img
            src={this.props.photo}
            alt='nada'
            onClick={e => {
              this.onClose(e);
            }}
          />

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
