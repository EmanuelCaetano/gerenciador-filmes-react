import "./global.css";
import { Topbar } from "./componentes/topbar";
import {  Topbanner } from "./componentes/topbanner";
import {  Mainbody  } from "./componentes/mainbody";
import {  Footer  } from "./componentes/footer";
import {  Menu  } from "./componentes/menu";
import { Home } from "./pages/home";
import { Actors } from "./pages/actors";
import { Films } from "./pages/films";
import { Directors } from "./pages/directors";
import { Routes, Route } from "react-router-dom";
/* habilitar a paginação sem link */



function App() {
  return (
    <>
    <Topbar/>
    <Topbanner />
      {/*importando uma pagina dentro da outra*/}
      <Mainbody>
          <Menu />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/atores" element={<Actors />} />
             <Route path="/filmes" element={<Films />} />
             <Route path="/diretores" element={<Directors />} />
          </Routes>
          
      </Mainbody>
      {/*finalizando da importação*/}
      
    <Footer />
    </>

  );
}

export default App;
