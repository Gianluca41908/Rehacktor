import { useEffect, useState } from "react"
import CardGame from "../components/CardGame";
import useFetchSolution from "../hook/useFetchSolution";

function HomePage() {
    
    const initialUrl = 'https://api.rawg.io/api/games?key=d34c47c3b549472591cc824202824e57';
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    return (
        <div>
            <h1 className="text-light text-center py-3">Homepage</h1>
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

export default HomePage