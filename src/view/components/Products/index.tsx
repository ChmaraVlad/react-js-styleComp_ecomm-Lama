// data
import { popularProducts } from '../../../data'
import { Product } from '../'

// styles
import * as S from './styles'

export const Products = () => {
     return (
          <S.Container>
               {
                    popularProducts.map(item => (
                         <Product item={item} key={item.id}/>
                    ))
               }
          </S.Container>
     )
}
