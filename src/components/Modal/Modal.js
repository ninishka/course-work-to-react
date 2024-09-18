import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  EmailLink,
  Wrapper
}from './styled'
const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Contact Me</h2>
        <Wrapper>
          <EmailLink href="mailto:zambakhidzenini.740@gmail.com">zambakhidzenini.740@gmail.com</EmailLink>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </Wrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;