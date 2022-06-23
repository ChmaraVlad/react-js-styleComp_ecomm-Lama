// styles
import * as S from './styles'

// types 
interface Props {
     item?: any
}

export const CategoryItem = ({ item }: Props) => {
     return (
          <S.Container>
               <S.Image src={item.img} />
               <S.Info>
                    <S.Title>{item.title}</S.Title>
                    <S.Button>SHOP NOW</S.Button>
               </S.Info>
          </S.Container>
     )
}
