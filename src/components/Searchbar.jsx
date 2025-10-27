import { useState } from "react"
import { useNavigate } from "react-router"

function Searchbar(){
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [ariaInvalid, setAriaInvalid] = useState(null);

    const handleSearch = (event) => {
        event.preventDefault();
        if (typeof search === 'string' && search.trim().length !=0){
            navigate(`/search?query=${search}`)
            setSearch("");
        } else {
            setAriaInvalid(true)
        }
    };

    return (
        <form onSubmit={handleSearch} className="ps-5 ms-5 my-auto">
            <fieldset role="group">
                <input 
                type="text"
                name="search"
                placeholder={ariaInvalid ? "Devi cercare qualcosa" : "Search a game"}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                aria-invalid={ariaInvalid} />
                <input type="submit" value={'Go'} className="ms-1" />
            </fieldset>
        </form>
    );
}

export default Searchbar