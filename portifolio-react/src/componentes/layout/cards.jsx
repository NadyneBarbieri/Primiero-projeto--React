import { CaixaImag, Imag, Titulo, Texto, Div } from '../styled/Styled'
import url from '../img/react.png'


function Cards({titulo, corpo}){
  return(

    <Div>
      <CaixaImag>
        <Imag src={url} alt="">
        </Imag>
        <Titulo>{titulo}</Titulo>
        <Texto>{corpo}</Texto>
      </CaixaImag>
    </Div>
    
  )
}

export default Cards