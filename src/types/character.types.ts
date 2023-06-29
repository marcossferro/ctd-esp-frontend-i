export interface Character {
  id: number,
  name?: string,
  url?: string,
  location?: string,
  image?: string,
  gender?: string,
  episodes?: string[],
}

export interface Episode{
  id: number,
  title: string,
  date: string,
  episode: string,
}