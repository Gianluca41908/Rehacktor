import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router";
import useFetchSolution from "../hook/useFetchSolution";


function GenresDropdown() {
    // const [genres, setGenres] = useState(null);
    // const [error, setError] = useState(null);

    const initialUrl = 'https://api.rawg.io/api/genres?key=d34c47c3b549472591cc824202824e57';
    const { data, loading, error, updateUrl } = useFetchSolution(initialUrl);

    // const load = async () => {
    //     try {
    //         const response = await fetch(initialUrl);
    //         if (!response.ok) {
    //             throw new Error(response.statusText);
    //         }
    //         const json = await response.json();
    //         setGenres(json);
    //     } catch (error) {
    //         setError(error.message);
    //         setGenres(null);
    //     }
    // }

    // useEffect(() => {
    //     load();
    // }, []);

    return (
        <div>
            <DropdownButton className="pt-4 drop" menuVariant="dark" variant="dark" id="dropdown-basic-button" title="Generi">
                {error && <small>{error}</small>}
                {data && data.results.map((genre) => (
                    <Dropdown.Item key={genre.id} as={Link} to={`/games/${genre.slug}`} >{genre.name}</Dropdown.Item>
                ))}
            </DropdownButton>
            {/* <ul className="pt-3">
                <li className="list-unstyled text-light fw-bold pb-4">GENERI</li>
                {data && data.results.map((genre) => (
                    <li className="list-unstyled text-light pb-3" key={genre.id} >
                    <Link to={`/games/${genre.slug}`} className="text-decoration-none text-light" >
                        {genre.name}
                    </Link>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default GenresDropdown