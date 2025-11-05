import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetchSolution from "../hook/useFetchSolution";
import ToggleFavorite from "../components/ToggleFavorite";
import Chatbox from "../components/Chatbox";

function GamePage() {
    const { id } = useParams();

    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);

    const initialUrl = `https://api.rawg.io/api/games/${id}?key=d34c47c3b549472591cc824202824e57`;
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
    // }, [id]);

    return (
        <div>
            {error && <h1 className="text-center text-danger mb-pers">{error}</h1>}
            {data && <h1 className="text-light text-center py-5 mb-3">{data.name}</h1>}
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-6 ps-4">
                        <img className="w-100" src={data && data.background_image} alt="game image" />
                        {/* <div className="">
                            <Chatbox data={data && data} />
                        </div> */}
                    </div>
                    <div className="col-6 px-5 text-light">
                        <p className="d-inline">Release date: {data && data.released}</p> <ToggleFavorite data={data} />
                        <p>Rating: {data && data.rating}</p>
                        <p>{data && data.description_raw}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage