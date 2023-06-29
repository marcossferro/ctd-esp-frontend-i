

// Busca los personajes favoritos que esten guardados en el localStorage
export const getFavFromStorage = () => {
  const favorites = localStorage.getItem('favs')
  if (favorites) {
    return JSON.parse(favorites);
  }
  return []
};


/**
 * Guarda el Character como favorito en LocalStorage
 * @author Marcos Ferro
 * @param {number} fav
 * @returns un array con los personajes del localStorage
 */
export const setFavInStorage = (fav: number) => {
  let favorites = getFavFromStorage()
  if (!favorites) {
    favorites = []
  }

  if (favorites.includes(fav)) {
    return favorites
  }

  const newFavorites = [...favorites, fav];
  localStorage.setItem('favs', JSON.stringify(newFavorites));

  return newFavorites
}

/**
 * Eliminar el Character del localStorage
 * @author Marcos Ferro
 * @param {number} fav
 * @returns un array con los perosnajes del localStorage menos el que eliminamos
 */
export const removeFavInStorage = (fav: number) => {
  const favorites = getFavFromStorage()
  if (!favorites) {
    return []
  }

  if (!favorites.includes(fav)) {
    return favorites
  }

  const newFavorites = favorites.filter((f: number) => f !== fav)
  localStorage.setItem('favs', JSON.stringify(newFavorites))

  return newFavorites
}

/**
 * Elimina o guarda un Character en favoritos
 * @author Marcos Ferro
 * @param {number} id
 * @returns una función que puede ser setFavInStorage o RemoveFavInStorage
 */
export const toggleFavorite = (id: number) => {
  const favoritos = getFavFromStorage()
  if (!favoritos) {
    return setFavInStorage(id)
  }

  if (!favoritos.includes(id)) {
    return setFavInStorage(id)
  }

  return removeFavInStorage(id)
}

// Borra la info de localStorage
export const resetFavorites = () => {
  localStorage.removeItem('favs')
  return []
}
