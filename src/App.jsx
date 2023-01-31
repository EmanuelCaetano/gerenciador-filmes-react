import { Topbar } from "./componentes/topbar";
import {Topbanner} from "./componentes/topbanner";
import {Mainbody} from "./componentes/mainbody";
import {Footer} from "./componentes/footer";
import "./global.css";

function App() {
  return (
    <>
    <Topbar/>
    <Topbanner />
    <Mainbody />
    <Footer />
    </>

  );
}

export default App;
