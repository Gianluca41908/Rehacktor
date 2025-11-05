import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import GenrePage from "../pages/GenrePage"
import GamePage from "../pages/GamePage"
import SearchPage from "../pages/SearchPage"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import AccountPage from "../pages/AccountPage"

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/games/:genre" element={<GenrePage />} />
                    <Route path="/games/:slug/:id" element={<GamePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/register" element={<RegisterPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/account" element={<AccountPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing