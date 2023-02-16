import "./style.css";
import { BACKEND_URL } from "../../config";
import  axios  from "axios";
import { useState , useEffect} from "react";

function directorsHandler(directors){

  if(!Array.isArray(directors)){
    return directors;

    }

  var i = 0;

  var content = directors.map(function(director){
        return(
          <div className="directors-content" key={i++}>{i+1} - {director.nome} </div>
        );
  });

 return content;
}



export function Directors (){

  const  [directors, setDirectors] = useState("Nada a mostrar");

  useEffect(function(){
    axios.get(BACKEND_URL + "/directors")
  .then(function(response){
        setDirectors(directorsHandler(response.data));
  })
  .catch(function(error){

  })
  .finally(function(){

  });

  },[]);  

  return (
    <div className=".content">
      <h1>Diretores</h1>
      {directors}
    </div>

  );
}