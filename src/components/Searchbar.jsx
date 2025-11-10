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
        <form onSubmit={handleSearch} className="ps-md-5 ms-md-5 my-md-auto pb-3 pb-sm-0">
            <fieldset role="group">
                <input 
                type="text"
                name="search"
                placeholder={ariaInvalid ? "Devi cercare qualcosa" : "Cerca un gioco"}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                aria-invalid={ariaInvalid} />
                <input type="submit" value={'Cerca'} className="ms-1" />
            </fieldset>
        </form>
    );
}

export default Searchbar