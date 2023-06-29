
import { Character } from '../../types/character.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

interface GridOfCharacterProps {
    characters : Character[]
}

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @author Marcos Ferro
 * @param {object} characters
 * @returns un JSX element 
 */
const GrillaPersonajes = ({characters}: GridOfCharacterProps) => {
    
    return <div className="grilla-personajes">
        { characters.map((character) =>(
            <TarjetaPersonaje key={character.id} character={character}/>
        )) }
    </div>
}

export default GrillaPersonajes