import myContext from "../components/Mycontext";
import { useContext } from "react";

export default function Favoritos() {

  const {imagen} = useContext(myContext);
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {imagen.filter(foto => foto.liked).map((foto, indice) => (
       <div className="foto" key={indice} style={{backgroundImage : `url(${foto.src.portrait})`} } > 
       </div>
      ))}
       
      </div>
    </div>
  );
}
