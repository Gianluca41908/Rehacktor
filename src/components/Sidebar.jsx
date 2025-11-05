import GenresDropdown from "./GenresDropdown";




function Sidebar() {


    return (
        <div className="col-12 col-md-2 pt-3 mt-5 d-none d-md-flex flex-column side" style={{ minHeight: "0", overflowY: "auto" }}>
            <GenresDropdown />
        </div>
    )
}

export default Sidebar