import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

export const Hero = () => {

    const {heroId} = useParams();
    
    //* va a disparar este callback cada vez que sus dependencias cambien
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if(!hero){
        return <Navigate to={'/marvel'} />
    }

    const navigate = useNavigate();
    const onNavigateBack = (publisher) => {
        (publisher.includes("DC")) ? (navigate('/dc',{replace:true})) : (navigate('/marvel',{replace:true}));
    }

    return (
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className='col-4 '>
                <img 
                    src={`/assets/udemyBC/06-heoresSpa/heroes/${hero.id}.jpg`} 
                    className='img-thubnail' 
                    alt={hero.superhero}>
                </img>
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: {hero.alter_ego}</b></li>                     
                    <li className='list-group-item'><b>Publisher: {hero.publisher}</b></li>                     
                    <li className='list-group-item'><b>First appereance: {hero.first_appearance}</b></li>           
                </ul>
                <h5 className='mt-3'>Characters:</h5>
                <p>{hero.characters}</p>
                <button className='btn btn-outline-primary' onClick={() => onNavigateBack(hero.publisher)}>Return</button>
            </div>
        </div>
    )
}
