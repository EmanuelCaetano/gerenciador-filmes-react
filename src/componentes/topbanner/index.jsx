import Google from "./imgs/logo.png";
import "./style.css";

export function Topbanner(){
  return(
    <div  className="topbanner">
      <img src={Google} className="logo" alt="Google"/>
      <center className="topbanner">GERENCIADOR DE FILMES</center>     
    </div>
  );
}