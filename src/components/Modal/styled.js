import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const CloseButton = styled.button`
  background: #E93656;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

 export const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin: 41px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
`