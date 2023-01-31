import { Topbar } from "./componentes/topbar";
import {  Topbanner } from "./componentes/topbanner";
import {  Mainbody  } from "./componentes/mainbody";
import {  Footer  } from "./componentes/footer";
import {  Menu  } from "./componentes/menu";
import "./global.css";

function App() {
  return (
    <>
    <Topbar/>
    <Topbanner />
      {/*importando uma pagina dentro da outra*/}
      <Mainbody>
          <Menu />
      </Mainbody>
      {/*finalizando da importação*/}
    <Footer />
    </>

  );
}

export default App;
