import {Botao} from '../styled/Styled'
/** props propriedade que passa função para outro lugar da aplicação*/
function Button(props){
    return (
    <div>
      <Botao onClick={props.event}> Enviar</Botao>
      <Botao cor onClick={props.event}>Cancelar</Botao>
    </div>
    
  )
}

export default Button