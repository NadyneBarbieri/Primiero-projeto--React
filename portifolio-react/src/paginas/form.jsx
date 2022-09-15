/**bibloteca do reac que fa o useStates funcionar */
import { Div,  Container, Formulario} from '../componentes/styled/Styled'
import {useState } from 'react'
import Button from '../componentes/layout/button'


function Form(){
    /** consoli variavel que passa o valor pro console*/
    function EmailEnviado(consoli){
        consoli.stopPropagation() 
        console.log(name)
        console.log(email)
        console.log(texto)
        console.log('Mensagem enviada!')
        
    }

    const [name, setName] = useState()
    const [email, setEmail]= useState()
    const [texto, setTexto]= useState()
return (
    <Container>
        <Formulario>
           
                <form onSubmit={EmailEnviado}>
                    <Div>
                        <label htmlFor="name">Nome:</label>
                        <input type='texto'
                        id='name'
                        name='name'
                        placeholder="Digite seu nome"
                        onChange={(consoli) => setName(consoli.target.value)}/>
                    </Div>
                    <Div>
                        <label htmlFor="email">Email:</label>
                        <input type='texto'
                        id='email'
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(consoli) => setEmail(consoli.target.value)}/>
                    </Div>
                    <Div>
                        <label htmlFor="texto">Digite seu texto:</label>
                        <input type='texto'
                        id='texto'
                        name="texto"
                        placeholder="Digite seu comentario aqui"
                        onChange={(consoli) => setTexto(consoli.target.value)}/>
                     
                    </Div>
                    <Div>
                        <Button/>
                    </Div>
                </form>
           
        </Formulario>
    </Container>           
)
}
export default Form