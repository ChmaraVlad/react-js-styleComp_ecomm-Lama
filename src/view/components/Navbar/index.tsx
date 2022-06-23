// core
import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'

// styles
import * as S from './styles'
import { Badge } from '@mui/material'

export const Navbar = () => {
     return (
          <S.Container>
               <S.Wrapper>
                    <S.Left>
                         <S.Language>
                              EN
                         </S.Language>
                         <S.SearchContainer>
                              <S.Input
                                   placeholder="Search"
                              />
                              <Search style={{color:'gray', fontSize:16}} />
                         </S.SearchContainer>
                    </S.Left>
                    <S.Center>
                         <S.Logo>
                              LAMA.
                         </S.Logo>
                    </S.Center>
                    <S.Right>
                         <S.MenuLink>Register</S.MenuLink>
                         <S.MenuLink>Sign In</S.MenuLink>
                         <S.MenuLink>
                              <Badge badgeContent={4} color="primary">
                                   <ShoppingCartOutlined />
                              </Badge>
                         </S.MenuLink>
                    </S.Right>
               </S.Wrapper>
          </S.Container>
     )
}
