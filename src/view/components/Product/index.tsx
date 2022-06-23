// core
import {
     FavoriteBorderOutlined,
     SearchOutlined,
     ShoppingCartOutlined,
} from '@mui/icons-material'

// styles
import { IPopularProduct } from '../../../types'
import * as S from './styles'

// types
interface ProductProps {
     item: IPopularProduct
}

export const Product = ({ item }: ProductProps) => {
     return (
          <S.Container>
               <S.Circle />
               <S.Image src={item.img} />
               <S.Info>
                    <S.Icon>
                         <ShoppingCartOutlined />
                    </S.Icon>
                    <S.Icon>
                         <SearchOutlined />
                    </S.Icon>
                    <S.Icon>
                         <FavoriteBorderOutlined />
                    </S.Icon>
               </S.Info>
          </S.Container>
     )
}
