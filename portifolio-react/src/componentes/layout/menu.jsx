/**bibloteca do react que permite fazer a conexão das paginas */
import {Link} from 'react-router-dom'
import {Nav} from '../styled/Styled'

/**variavel que chama o css do codigo seguido por seu endereço */
function Menu(){
    /**className  do atributo sintaxe de estilização do react*/

    return(
        /**semantica nav para indicar menu/navBar */
        /*ol lista ordenada com  numeros ul lista nao ordenada ou seja aparece pontos nao numeros */
        /**li item da lista */
        <Nav>
            <Link to= "/"> 
             <li>Sobre</li>
            </Link>
            
            <Link to="/habilidades"> 
                <li> Habilidades </li> 
            </Link>
            
        
            <Link  to="/contato"> 
                <li>Contato</li> 
            </Link>
        </Nav>
        
    )
}
export default Menu