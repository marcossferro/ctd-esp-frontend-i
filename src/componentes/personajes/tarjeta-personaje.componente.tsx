import { Character } from '../../types/character.types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setDetail } from '../../redux/slices/detailReducer';
import { useNavigate } from 'react-router-dom';
import { fetchToggleFavorite } from '../../redux/slices/favoriteReducer';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

interface CharacterProps{
    character: Character
}
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes
 * 
 * @author Marcos Ferro
 * @param {object} character
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character} : CharacterProps) => {
    const {list} = useAppSelector((state) => state.favorite)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    // Funcion que redirije a la vista en detalle de cada personaje
    const viewDetail = () => {
        dispatch(setDetail(character))
        navigate("/detalle")
    }
    // Funcion que dispara la funcion que agrega/borra un personaje de favoritos
    const onClickFavorite = () => {
        dispatch(fetchToggleFavorite(character.id))
    }

    const isFavorite = list.includes(character.id)

    return ( 
        <div className="tarjeta-personaje">
            <img  src={character.image} alt={character.name} onClick={() => viewDetail()}/>
            <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito onClick={onClickFavorite} isFavorite={isFavorite} />
        </div>
        </div>
    )
}

export default TarjetaPersonaje;