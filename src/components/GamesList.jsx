import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import Loading_Card from "./Loading_Card";
import { API_HOST, API_KEY } from "../assets/api_helpers";
export default function GamesList() {
  // Filters data
  const [platform, setPlatform] = useState("pc");
  const [category, setCategory] = useState("shooter");
  const [sort, setSort] = useState("alphabetical");
  // fetch all games
  const [games, setGames] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(`/games`, {
          baseURL: `https://${API_HOST}/api`,
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
          },
          params: {
            platform: `${platform}`,
            category: `${category}`,
            "sort-by": `${sort}`,
          },
        });
        setGames(response.data);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getGames();
  }, [platform, category, sort]);
  //  pagination
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  return (
    <div className="container my-6 mx-auto">
      <h2 className="main-title">Games</h2>
      <Filters
        platform={platform}
        setPlatform={setPlatform}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isloading
          ? // create array of elements length of array = games per page
            Array.from({ length: gamesPerPage }).map((_, index) => (
              <Loading_Card key={index} />
            ))
          : currentGames.map((game) => {
              return (
                <Link
                  to={`/${game.id}`}
                  className="card rounded-3xl relative h-96 bg-[#ffffff1a]"
                  key={game.id}
                >
                  <img
                    className="rounded-t-3xl w-full h-40  object-cover"
                    src={game.thumbnail}
                    alt={game.name}
                  />
                  <div className="p-4 text-gray-300 space-y-2 h-40">
                    <h1 className="text-xl">{game.title}</h1>
                    <div className="flex justify-between gap-1 items-center text-xs ">
                      <p>{game.developer}</p>
                      <span className="-tracking-wider text-white bg-[#f48924] p-1 rounded-3xl text-nowrap">
                        {game.genre}
                      </span>
                    </div>
                    <p className="text-sm">{game.short_description}</p>
                  </div>
                </Link>
              );
            })}
      </div>
      {/* pagination display */}
      <Pagination
        data={games.length}
        gamesPerPage={gamesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
