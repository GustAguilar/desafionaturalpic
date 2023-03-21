import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import myContext from "./Mycontext";


export default function Home() {

  const {imagen, setImagen} = useContext(myContext);

 const agregaFavoritas = (id) => { 
  const index = imagen.findIndex(foto => foto.id === id)
  imagen[index].liked = !imagen[index].liked
  setImagen([...imagen])
  }


  return (
    <div className="galeria grid-columns-5 p-3">
      {imagen.map((foto, indice) => (
       <div className="foto" key={indice} style={{backgroundImage : `url(${foto.src.portrait})`}} onClick ={() => agregaFavoritas(foto.id) } > 
       <Heart filled={foto.liked} />
       <p>{foto.alt}.</p>

    
       </div>
      ))}
    </div>
  );
}
