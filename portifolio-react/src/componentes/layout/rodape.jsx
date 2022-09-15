import {FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import {Footer, Icones} from '../styled/Styled'
function Rodape(){
    return(
        
       /** footer semantica para do   */
        <Footer>
            <Icones>
                <li>
                    <a href="">
                        <FaLinkedin/>
                    </a>   
                </li>

                <li>
                    <a href="https://www.instagram.com/nadynemayara/">
                        <FaInstagram/>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/NadyneBarbieri">
                        <FaGithub/>
                    </a>
                    
                </li>
            </Icones>
            <span>Nadyne Barbieri &copy; </span> 
                
        </Footer>
             
       
    )
}
export default Rodape