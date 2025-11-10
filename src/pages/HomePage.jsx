import { useEffect, useState } from "react"
import CardGame from "../components/CardGame";
import useFetchSolution from "../hook/useFetchSolution";
import GenresDropdown from "../components/GenresDropdown";

function HomePage() {

    const initialUrl = 'https://api.rawg.io/api/games?key=d34c47c3b549472591cc824202824e57';
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    return (
        <div>
            <h1 className="text-light text-center py-3 mt-2">Tutti i giochi</h1>
            <div className="d-flex justify-content-center d-md-none">
                <GenresDropdown />
            </div>
            <div className="container-fluid pe-">
                {loading &&
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border spinner" role="status">
                            <span className="visually-hidden">Caricamento...</span>
                        </div>
                    </div>
                }
                <div className="row justify-content-evenly gap-3 pb-5">
                    {error && <h1 className="text-center text-danger mb-pers">{error}</h1>}
                    {data && data.results.map((game) => (
                        <CardGame key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage