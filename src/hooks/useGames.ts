import useData from "./useData";
import { Genre } from "./useGenres";


export interface Platform {
  id: number;
  name: string;
  slug: string;
  metacritic: number;
}
const useGames = (selectedGenre: Genre | null) =>
  useData<Platform>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);


export default useGames;