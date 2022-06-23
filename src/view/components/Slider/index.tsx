// styles
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { sliderItems } from '../../../data';
import * as S from './styles'

export const Slider = () => {
     const handleClick = (direction: string) => {
          if (direction === "left") {
               setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
               setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
     }

     const [slideIndex, setSlideIndex] = useState(0)

     return (
          <S.Container>
               <S.Arrow
                    onClick={() => handleClick('left')}
                    direction="left"
               >
                    <ArrowLeftOutlined />
               </S.Arrow>
               <S.Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                         <S.Slide bg={item.bg} key={item.id}>
                              <S.ImgContainer>
                                   <S.Image src={item.img} />
                              </S.ImgContainer>
                              <S.InfoContainer>
                                   <S.Title>{item.title}</S.Title>
                                   <S.Desc>{item.desc}</S.Desc>
                                   <S.Button>SHOW NOW</S.Button>
                              </S.InfoContainer>
                         </S.Slide>
                    ))}
               </S.Wrapper>
               <S.Arrow
                    onClick={() => handleClick('right')}
                    direction="right"
               >
                    <ArrowRightOutlined />
               </S.Arrow>
          </S.Container>
     )
}
