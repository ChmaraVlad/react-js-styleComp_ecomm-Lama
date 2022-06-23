// data
import { categories } from '../../../data';

// components
import { CategoryItem } from '../CategoryItem';

// styles
import * as S from './styles'

// types
import { ICategory } from '../../../types';


export const Categories = () => {
     return (
          <S.Container>
               {
                    categories.map((item: ICategory) => (
                         <CategoryItem item={item} key={item.id}/>
                    ))
               }
          </S.Container>
     )
}
