import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  border: solid black 1px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  text-align: center;
`;

const ModalImage = styled.div`
  position: relative;
  margin: 0 auto;
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  ${props =>
    props.landscape
      ? css`
          width: 100%;
        `
      : css`
          height: 100%;
        `} /* Set rules to fill background */


  /* Set up proportionate scaling */

  /* Set up positioning */
`;

const Close = styled.span`
  position: absolute;
  left: 0;
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
  return (
    <Container id='container'>
      <ModalImage id='modal-image'>
        <Img
          src={props.photo}
          alt='nada'
          onClick={props.onClose}
          landscape={props.landscape}></Img>
        <Close onClick={props.onClose}>&times;</Close>
      </ModalImage>
    </Container>
  );
};

/*<Img
landscape={props.landscape}
src={props.photo}
alt='nada'
onClick={props.onClose}
/>*/

export default Modal;
