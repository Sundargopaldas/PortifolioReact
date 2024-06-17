import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Trabalhos from "./pages/trabalhos"
import Contato from "./pages/contato"
function App() {

  return (
    <div>
      
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/sobre" element= {<Sobre/>}/>
        <Route path="/trabalhos" element= {<Trabalhos/>}/>
        <Route path="/contato" element= {<Contato/>}>
        </Route>

      </Routes>
    </BrowserRouter>
</div>

  
  )
  
}
export default App
