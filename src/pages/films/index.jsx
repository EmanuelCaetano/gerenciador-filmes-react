import "./style.css";
import { BACKEND_URL } from "../../config";
import  axios  from "axios";
import { useState , useEffect} from "react";

function filmsHandler(films){

  if(!Array.isArray(films)){
    return films;

    }

  var i = 0;

  var content = films.map(function(film){
        return(
          <div className="film-content" key={i++}>{i+1} - {film.nome} </div>
        );
  });

 return content;
}

export function Films (){

  const  [films, setFilms] = useState("Nada a mostrar");

  useEffect(function(){
    axios.get(BACKEND_URL + "/Filmes")
  .then(function(response){
        setFilms(filmsHandler(response.data));
  })
  .catch(function(error){

  })
  .finally(function(){

  });

  },[]);  

  return (
    <div className=".content">
      <h1>Filmes</h1>
     {films}
    </div>

  );
}