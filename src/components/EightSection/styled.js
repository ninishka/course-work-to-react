import styled from 'styled-components'

export const Wrapper = styled.section`
 background-color: #A7C1D9;
`

export const TitleLp = styled.div`
  text-align: center;
  /* margin: 60px 0 35px; */
`
export const Articles = styled.h1`
  color: #2E2E2E;
  font-size: 45px;
  margin-top: 0;
  padding: 57px;
`
export const RosaTeam = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 100px;
  align-items: center;
    &:hover {
    margin-top: 0px;
  }
`
export const KubiksWrap = styled.div`
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  width: 100px;
  height: 100px;
  position: relative;
  margin: 20px;
  display: flex;
  align-items: center;

  &:hover {
    background-image: none;
    
    .text-wrap { // how to receive child elem in parent hover
      opacity: 1
    }

    &::after {
      content: '';
      position: absolute;
      top: -30px;
      left: -30px;
      right: -30px;
      bottom: -30px;
      border: 4px solid red;
    }

  }
`;
export const TextWrapp = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease; /* Smooth transition for better UX */
  position: relative;
  z-index: 10;
`;
export const RosaTitle = styled.h3`
  color: #161616;
  font-size: 13px;
  font-weight:bold ;
  text-align: center;
  padding: 5px;
`
export const RosaText = styled.p`
  color:#626262;
  font-size: 10px;
  text-align: center;
  padding: 5px;
`
