import { useParams } from "react-router";
import { useState, useEffect } from "react";
import CardGame from "../components/CardGame";
import useFetchSolution from "../hook/useFetchSolution";


function GenrePage() {
    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    const { genre } = useParams();
    
    const initialUrl = `https://api.rawg.io/api/games?key=d34c47c3b549472591cc824202824e57&genres=${genre}`;
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    // const load = async () => {
    //     try {
    //         const response = await fetch(initialUrl);
    //         if (!response.ok) {
    //             throw new Error(response.statusText);
    //         }
    //         const json = await response.json();
    //         setData(json);
    //     } catch (error) {
    //         setError(error.message);
    //         setData(null);
    //     }
    // }

    //     useEffect(() => {
    //     load();
    // }, [genre]);

    useEffect(() =>{
        updateUrl(initialUrl)
    }, [initialUrl, updateUrl]);

    return (
        <div>
            <h1 className="text-light text-center py-3">All {genre} games</h1>
            <div className="container">
                <div className="row justify-content-center gap-3">
                    {error && <h1 className="text-center text-danger mb-pers">{error}</h1>}
                    {data && data.results.map((game) => (
                        <CardGame game={game} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GenrePage