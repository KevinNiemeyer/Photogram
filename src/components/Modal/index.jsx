import React from 'react';
import styled, { css } from 'styled-components';

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
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.45);
  transition: 0.3s;
`;

const Container2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: block;
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

const Modal = props => {
  if (!props.show) {
    return null;
  }
  console.log(props);
  return (
    <Container id='container1'>
      <Container2 id='container2'>
        <Img
          landscape={props.landscape}
          src={props.photo}
          alt='nada'
          onClick={props.onClose}
        />

        <Close onClick={props.onClose}>&times;</Close>
      </Container2>
    </Container>
  );
};

export default Modal;
