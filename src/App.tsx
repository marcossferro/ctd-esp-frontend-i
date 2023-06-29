import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useEffect } from "react";
import { fetchCharacters } from "./redux/slices/characterReducer";
import { fetchEpisodes } from "./redux/slices/detailReducer";
import { fetchFavorite, fetchFavoritesCharacters } from "./redux/slices/favoriteReducer";

/**
 * Pagina Principal
 * @author Marcos Ferro
 * @returns un jsx element
 */
function App() {
  const {character} = useAppSelector((state) => state.detail)
  const {list} = useAppSelector((state) => state.favorite)
  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(fetchCharacters())
  })

  useEffect(() =>{
    dispatch(fetchEpisodes())
  }, [character]);

  useEffect(() => {
    dispatch(fetchFavorite())
  }, []);

  useEffect(() => {
    dispatch(fetchFavoritesCharacters())
  }, [list]);
  
  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;
