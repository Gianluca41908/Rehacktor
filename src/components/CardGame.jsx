import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LazyLoadGameImage from './LazyLoadGameImage';

function CardGame({ game }) {
    const genres = game.genres.map((genre) => genre.name).join(', ');
    const { background_image: image } = game;
    return (
        <Card key={game.id} style={{ width: '18rem', height: '25rem' }} className='col-4 px-0 border-link-light border-2'>
            {/* <Card.Img className='h-40' variant="top" src={game.background_image} alt='game' /> */}
            <div className='h-40'>
                <LazyLoadGameImage image={image} />
            </div>
            <Card.Body className='bg-dark text-light d-flex flex-column justify-content-center'>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>
                    <small>{genres}</small>
                    <p>{game.released}</p>
                </Card.Text>
                <Button as={Link} to={`/games/${game.slug}/${game.id}`} className='mt-auto mb-3' variant="light">Vai al gioco</Button>
            </Card.Body>
        </Card>
    )
}

export default CardGame