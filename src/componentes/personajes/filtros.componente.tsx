import { useEffect } from 'react';
import { fetchFilterCharacters, filterCharacter } from '../../redux/slices/characterReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './filtros.css';


/**
 * Buscador por nombre de personaje
 * @author Marcos Ferro 
 * @returns un jsx element
 */
const Filtros = () => {
    const filter = useAppSelector((state) => state.characters.filter)
    const dispatch = useAppDispatch();

    useEffect(() =>{
        if(filter != undefined){
            dispatch(fetchFilterCharacters(filter))
        }
    }, [filter])

    // Dispara la action filterCharacter para poder filtrar por un nombre en especifico
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(filterCharacter(e.target.value))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input onChange={(e) => onChange(e)} type="text" value={filter} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;