import { useEffect } from "react";
import { useSearchParams } from "react-router";
import CardGame from "../components/CardGame";
import useFetchSolution from "../hook/useFetchSolution";

function SearchPage() {
    let [searchParams] = useSearchParams();
    const game = searchParams.get("query");

    const initialUrl = `https://api.rawg.io/api/games?key=d34c47c3b549472591cc824202824e57&search=${game}`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    useEffect(() => {
        updateUrl(initialUrl)
    }, [initialUrl, updateUrl]);

    return (
        <div>
            <h1 className="text-light text-center py-3">Risultati per: {game}</h1>
            <div className="container">
                <div className="row justify-content-center gap-3">
                    {loading && <p>loading...</p>}  { /* CAMBIARE LOADING */}
                    {error && <h1 className="text-center text-danger mb-pers">{error}</h1>}
                    {data && data.results.map((game) => (
                        <CardGame game={game} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchPage