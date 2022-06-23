// components
import { Navbar, Announcement, Products, Newsletter, Footer } from '../../components'

// styles
import * as S from './styles'

export const ProductList = () => {
     return (
          <S.Container>
               <Announcement />
               <Navbar />
               <S.Title>
                    Dresses
               </S.Title>
               <S.FilterContainer>
                    <S.Filter>
                         <S.FilterText>
                              Filter By:
                         </S.FilterText>
                         <S.Select>
                              <S.Option disabled selected>
                                   Color
                              </S.Option>
                              <S.Option>White</S.Option>
                              <S.Option>Black</S.Option>
                              <S.Option>Red</S.Option>
                              <S.Option>Blue</S.Option>
                              <S.Option>Yellow</S.Option>
                              <S.Option>Green</S.Option>
                         </S.Select>
                         <S.Select>
                              <S.Option disabled selected>
                                   Size
                              </S.Option>
                              <S.Option>XS</S.Option>
                              <S.Option>S</S.Option>
                              <S.Option>M</S.Option>
                              <S.Option>L</S.Option>
                              <S.Option>XL</S.Option>
                         </S.Select>
                    </S.Filter>
                    <S.Filter>
                         <S.FilterText>
                              Sort By:
                         </S.FilterText>
                         <S.Select>
                              <S.Option selected>Newest</S.Option>
                              <S.Option>Price (asc)</S.Option>
                              <S.Option>Price (desc)</S.Option>
                         </S.Select>
                    </S.Filter>
               </S.FilterContainer>
               <Products />
               <Newsletter />
               <Footer />
          </S.Container>
     )
}

