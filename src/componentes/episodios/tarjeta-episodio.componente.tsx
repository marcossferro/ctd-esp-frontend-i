import { Episode } from '../../types/character.types';
import './tarjeta-episodio.css';

interface EpisodeProps{
    episode: Episode
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * @author Marcos Ferro
 * @param {object} episode
 * @returns un JSX element
 */
const TarjetaEpisodio = ({ episode }: EpisodeProps) => {

    return <div className="tarjeta-episodio">
            <h4>{episode.title}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {episode.date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;