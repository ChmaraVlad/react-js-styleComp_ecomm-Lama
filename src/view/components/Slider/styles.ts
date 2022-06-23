// core
import styled from "styled-components";

// -- types ----------------------------------------------------------------- //
export interface Props {
     direction?: string;
     bg?: string;
     slideIndex?: number
   }

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
position: relative;
overflow: hidden;
`

export const Arrow = styled.div`
position: absolute;
top: 0;
bottom: 0;
z-index: 2;
left: ${(props: Props) => props.direction === 'left' && '10px'};
right: ${(props: Props) => props.direction === 'right' && '10px'};
margin: auto;
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
opacity: 0.5;
`

export const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
  transform: translateX(${(props: Props) => props?.slideIndex && props.slideIndex * - 100}vw);
`

export const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${(props: Props) => `#${props.bg}`};
`

export const ImgContainer = styled.div`
height: 100%;
flex: 1;
`

export const Image = styled.img`
height: 80%;
`

export const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`


export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;