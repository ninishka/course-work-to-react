import { useState } from 'react'
import Modal from '../Modal/Modal'

import {
  Section2Wrapper,
  Information,
  MyNameAgain,
  Occupation2,
  Description,
  HireMe,
  MiddleImgItself,
  BarWrapper,
  Item,
  Languages,
  Persentage,
  BarCont,
  MyBar
} from './styled'

import tpt3 from '../imgs/tpt3.png'

const progressBarData = [
  { id: "myBar1", text: 'HTML', finalWidth: 0.9,  width: 10  },
  { id: "myBar2", text: 'CSS', finalWidth: 0.85,  width: 10 },
  { id: "myBar3", text: 'JS', finalWidth: 0.70,  width: 10  },
  { id: "myBar4", text: 'React', finalWidth: 0.70,  width: 10 },
]

const SecondSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Section2Wrapper>
      <Information>
        <MyNameAgain>SKILLS</MyNameAgain>
        <Description>
          Proficient in HTML, CSS, and vanilla JavaScript, with hands-on experience in React and a readiness to adapt to new technologies like Next.js. 
          Skilled in using Git for version control and collaborating on development tasks
        </Description>
        <HireMe onClick={handleOpenModal}>Hire Me</HireMe>
      </Information>
      <div>
        <MiddleImgItself src={tpt3} alt="niniimg"/>
      </div>
      <BarWrapper>
        {progressBarData.map(({id, text, finalWidth, width}) => (
          <Item key={id}>
            <Languages>
              <p>{text}</p>
              {/* <Persentage>{`(${finalWidth}%)`}</Persentage> */}
            </Languages>
            <BarCont>
              <progress id={id} value={finalWidth} />
            </BarCont>
          </Item>
        ))}
      </BarWrapper>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </Section2Wrapper>
  );
}

export default SecondSection;
