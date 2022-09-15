import {Titulo, Texto, Container, Imag, Body} from '../componentes/styled/Styled'
import style from './contato.module.css'
function Sobre(){
    const url = "https://media-exp1.licdn.com/dms/image/C4D03AQFCWpVWjxQC9Q/profile-displayphoto-shrink_800_800/0/1650491874546?e=1668038400&v=beta&t=maWsb3DLzeht3xDUca1NqTlrEFxOXX4n75lMrg2kc_o"
    return(
    /**br pula um paragrafo*/
    /**img tav semantica para indicar o recebimento de uma imagem */
        <Container>
            <Titulo> Sobre Nadyne Barbieri</Titulo>
            <Body>
                <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta esse 
                provident porro dolores quod nemo, rem modi aspernatur adipisci iste 
                veniam accusantium<br/>
                magni maxime recusandae amet doloremque eaque voluptate! Minima!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae 
                distinctio expedita itaque voluptatum exercitationem modi amet et suscipit 
                ipsam, deleniti voluptatem eligendi officiis, autem 
                consequatur neque, adipisci cupiditate repudiandae non!</Texto>
                <Imag src={url} alt="Foto da Desenvolvedora desse site mulher preta cabelo black crespo meio enrolado, grande e castanho escuro olhos castanhos tambem, considerada linda por qualquer pessoas pois é tem fsico atletico tambem então esta no padrão de beleza.">
           
                </Imag>
            </Body>
        </Container>
    )
}


export default Sobre