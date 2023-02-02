import "./style.css";
import { BACKEND_URL } from "../../config";
import  axios  from "axios";

export function Actors (){

  axios.get(BACKEND_URL + "/atores")
  .then(function(response){

  })
  .catch(function(error){

  })
  .finally(function(){

  });
  
  return (
    <div className=".content">
    <h1>Atores</h1>
      <div>Conteudo</div>
    </div>

  );
}