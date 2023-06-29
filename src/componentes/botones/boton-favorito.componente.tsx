import './boton-favorito.css';


interface FavButtonProps{
    isFavorite: boolean
    onClick: () => void
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @author Marcos Ferro
 * @param {boolean} isFavorite
 * @param {onclick} onClick
 * @returns JSX element 
 */
const BotonFavorito = ({isFavorite, onClick}: FavButtonProps) => {
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png";

    return <div onClick={onClick} className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;