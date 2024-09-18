import {
  ArroundGrid,
  FlexCont,
  Box,
  ImgContainer,
  LabelBox,
  DescriptionBox,
  SectionWrap
} from './styled'

import img1 from '../imgs2/design.svg'
import img2 from '../imgs2/service.svg'
import img3 from '../imgs2/ideas.svg'
import img4 from '../imgs2/pixel.svg'
import img5 from '../imgs2/ideas.svg'
import img6 from '../imgs2/analysis.svg'
import img7 from '../imgs2/chart.svg'
import img8 from '../imgs2/support.svg'

const boxesData = [
  {
    title: 'Professional Experience',
    description: 'Currently engaged in a significant project for a personal business owner, creating a comprehensive e-commerce website with React.',
    src: img1
  },
  {
    title: 'Ongoing Growth',
    description: 'Committed to continuous learning and improvement, I actively seek to refine my skills and stay updated with industry trends.',
    src: img2
  },
  {
    title: 'Technical Skills',
    description: 'Proficient in HTML, CSS, and vanilla JavaScript, with hands-on experience in React.',
    src: img3
  },
  {
    title: 'Design Analysis',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img6
  },
  {
    title: 'Pixel Perfect',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img4
  },
  {
    title: 'Technical Skills',
    description: 'Proficient in HTML, CSS, and vanilla JavaScript, with hands-on experience in React.',
    src: img5
  },
  {
    title: 'Fully Managed',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img7
  },
  {
    title: 'Helpful Support',
    description: 'Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores.Ipsa dolor',
    src: img8
  },
]



const ForthSection = () => {

  return (
    <SectionWrap>
      <ArroundGrid>
        <FlexCont>
          {boxesData.map(({title, description, src}) => (
            <Box key={title}>
              <ImgContainer className='img-cont'>
                <img src={src} />
              </ImgContainer>
              <LabelBox>{title}</LabelBox>
              <DescriptionBox>{description}</DescriptionBox>
            </Box>
          ))}
        </FlexCont>
      </ArroundGrid>
    </SectionWrap>
  );
}

export default ForthSection;
