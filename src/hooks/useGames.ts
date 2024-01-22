import useData from "./useData";


export interface Game { 
  id: number;
  metacritic: number;
}
const useGames = () => useData<Game>('/games');

export default useGames;