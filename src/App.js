import "./styles.css";
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import myContext from "./components/Mycontext";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";


export default function App() {
  const endpoint = "/fotos.json";
  const [imagen, setImagen] = useState([])
  const [imagenesFav, setImagenesFav] = useState([])
  const resultadoImagen = {imagen, setImagen, imagenesFav, setImagenesFav}

  const buscaImagen = async () => {
    let imagenes = await fetch(endpoint)
    let resultado = await imagenes.json()
    setImagen(resultado.photos)
    
  }

  useEffect(() => {
    buscaImagen()
  },[])

  return (
    <div className="App">
      <myContext.Provider value={resultadoImagen}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}
