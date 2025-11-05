import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router';
import supabase from '../supabase/supabase-client'
import SessionContext from '../context/SessionContext'
import FavoritesContext from '../context/FavoritesContext';
import Avatar from '../components/Avatar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LazyLoadGameImage from '../components/LazyLoadGameImage';


export default function AccountPage() {
    const { session } = useContext(SessionContext);
    const { favorites, removeFavorite } = useContext(FavoritesContext);



    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [avatar_url, setAvatarUrl] = useState(null);



    useEffect(() => {
        let ignore = false;
        const getProfile = async () => {
            setLoading(true)
            const { user } = session

            const { data, error } = await supabase
                .from('profiles')
                .select('username, first_name, last_name, avatar_url')
                .eq('id', user.id)
                .single()

            if (!ignore) {
                if (error) {
                    console.warn(error)
                } else if (data) {
                    setUsername(data.username);
                    setFirstName(data.first_name);
                    setLastName(data.last_name);
                    setAvatarUrl(data.avatar_url);
                }
            }
            setLoading(false)
        }
        getProfile();

        return () => {
            ignore = true;
        };
    }, [session]);

    const updateProfile = async (event, avatarUrl) => {
        event.preventDefault()
        setLoading(true)
        const { user } = session

        const updates = {
            id: user.id,
            username,
            first_name,
            last_name,
            avatar_url: avatarUrl,
            updated_at: new Date(),
        }

        const { error } = await supabase.from('profiles').upsert(updates)
        if (error) {
            alert(error.message)
        } else {
            setAvatarUrl(avatarUrl)
        }
        setLoading(false)
    }

    return (
        <div className="container-fluid px-5 pt-3">
            <div className="row w-100 justify-content-between">
                <div className="col-3">
                    <h2 className='text-center my-4 pb-2 text-light'>Impostazioni profilo</h2>
                    <form onSubmit={updateProfile} className="form-widget">
                        <Avatar
                            url={avatar_url}
                            size={150}
                            onUpload={(event, url) => {
                                updateProfile(event, url);
                            }}
                        />
                        <div className='my-3 text-light'>
                            <label className='me-2' htmlFor="email">Email</label>
                            <input id="email" type="text" value={session.user.email} disabled />
                        </div>
                        <div className='my-3 text-light'>
                            <label className='me-2' htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                required
                                value={username || ""}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='my-3 text-light'>
                            <label className='me-2' htmlFor="first_name">Nome</label>
                            <input
                                id="first_name"
                                type="text"
                                value={first_name || ""}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='my-3 text-light'>
                            <label className='me-2' htmlFor="last_name">Cognome</label>
                            <input
                                id="last_name"
                                type="text"
                                value={last_name || ""}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className='btn btn-warning'
                            >
                                {loading ? "Caricamento ..." : "Aggiorna"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-9">
                    <h2 className='text-center my-4 text-light pb-2'>Preferiti</h2>
                    {favorites.length == 0 && <h3>Non ci sono giochi preferiti</h3>}
                    <div className="row gap-2 justify-content-evenly">
                    {favorites && favorites.map((game) => (
                            <Card key={game.id} style={{ width: '19rem', height: '18rem' }} className='col-4 px-0 border-link-light border-2'>
                                {/* <Card.Img className='h-40' variant="top" src={game.background_image} alt='game' /> */}
                                <div className='h-50'>
                                    <LazyLoadGameImage image={game.game_image} className="h-100" />
                                </div>
                                <Card.Body className='bg-dark text-light d-flex flex-column justify-content-center'>
                                    <Card.Title>{game.game_name}</Card.Title>
                                    <button onClick={() => removeFavorite(game.game_id)} className='btn btn-danger mt-auto mb-2'>Rimuovi dai preferiti</button>
                                </Card.Body>
                            </Card>
                        ))}
                        </div>


                </div>

            </div>
        </div>
    )
}
