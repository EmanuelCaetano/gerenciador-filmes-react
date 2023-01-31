import { Topbar } from "./componentes/topbar";
import {  Topbanner } from "./componentes/topbanner";
import {  Mainbody  } from "./componentes/mainbody";
import {  Footer  } from "./componentes/footer";
import {  Menu  } from "./componentes/menu";
import { Home } from "./pages/home";
import "./global.css";

function App() {
  return (
    <>
    <Topbar/>
    <Topbanner />
      {/*importando uma pagina dentro da outra*/}
      <Mainbody>
          <Menu />
          <Home/>
      </Mainbody>
      {/*finalizando da importação*/}
      
    <Footer />
    </>

  );
}

export default App;
