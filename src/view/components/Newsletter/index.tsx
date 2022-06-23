// core
import { Send } from '@mui/icons-material'

// styles
import * as S from './styles'

export const Newsletter = () => {
     return (
          <S.Container>
               <S.Title>
                    Newsletter
               </S.Title>
               <S.Description>
                    Get timely updates from your favorite products.</S.Description>
               <S.InputContainer>
                    <S.Input placeholder="Your email" />
                    <S.Button>
                         <Send />
                    </S.Button>
               </S.InputContainer>
          </S.Container>
     )
}
