import "./style.css";
import { BACKEND_URL } from "../../config";

export function Actors (){

  console.log("Backend: " + BACKEND_URL);

  return (
    <div className=".content">
    <h1>Atores</h1>
      <div>Conteudo</div>
    </div>

  );
}