import Menu from './componentes/layout/menu' /** importação usadad para importar o menu que esta vindo de outro componente/pagina */
import Rodape from './componentes/layout/rodape'
import Contato from './paginas/contato'
import Habilidades from './paginas/habilidades'
import Sobre from './paginas/sobre'
/**biblioteca do react que permite algumas funcionalidades */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
/**função que da origem a um componente seguido de nome do componente */
function App() {
  /**oque voce quer que essa função retorne */
  return (
    /**utilizada para criar rotas para seu menu */ 
    /**menu tag semantica para mais facil compreenção do codigo */
    /**routes da direcionamento para cada rota  */
    <Router>
      <Menu/>

        <Routes>
       
          <Route exact path="/" element={<Sobre/>}> 
          </Route>
          
          <Route  path="/habilidades" element={<Habilidades/>} > 
          </Route>
          
          <Route  path="/contato" element={<Contato/>} > 
          </Route>
        </Routes>
      <Rodape/>
    </Router>
  );
}
/**export permite que o codigo seja exportado para outra pagina */
/**default expesifica que tudo deve ser exportado */
export default App;
