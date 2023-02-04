import "./style.css";
import { BACKEND_URL } from "../../config";
import  axios  from "axios";
import { useState} from "react";

function actorsHandler(actors){

  if(!Array.isArray(actors)){
    return actors;

    }

  var i = 0;

  var content = actors.map(function(actor){
        return(
          <div key={i++}> {actor.nome} </div>
        );
  });

 return content;
}

export function Actors (){

  const [actors, setActors] = useState("Nada a mostrar");

  

  axios.get(BACKEND_URL + "/atores")
  .then(function(response){
        setActors(actorsHandler(response.data));
  })
  .catch(function(error){

  })
  .finally(function(){

  });
  
  return (
    <div className=".content">
    <h1>Atores</h1>
      
      {actors}
    </div>

  );
}