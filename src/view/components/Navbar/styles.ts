// core
import styled from "styled-components";

export const Container = styled.header`
height: 60px;
margin-bottom: 50px;
`

export const Wrapper = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;

/* background: red; */
`
export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

export const Language = styled.span`
font-size: 14px;
cursor: pointer;
`

export const Input = styled.input`
border: none;
flex: 1 1 auto;
`

export const Center = styled.div`
flex: 1;
text-align: center;
`

export const Logo = styled.h1`
font-weight: bold;
`
export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: end;
`

export const MenuLink = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

