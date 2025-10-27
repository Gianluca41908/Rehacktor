function Footer() {
    return (
        <footer className="footer bg-dark t-p pt-5 mt-5 pb-3 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center text-center">
                        <h5>Rehacktor</h5>
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center text-center">
                        <h5>Link utili:</h5>
                        <ul className="list-unstyled">
                            <li><a className="text-light text-decoration-none">www.rehacktor.it</a></li>
                            <li><a className="text-light text-decoration-none">xxxxxxxxxx</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <h5>Seguici:</h5>
                        <p className=" mb-0">Email: info@rehacktor.it</p>
                    </div>
                </div>
                <hr className="border-secondary" />
                <p className="text-center mb-0">&copy; 2025 Rehacktor.</p>
            </div>
        </footer>
    )
}

export default Footer