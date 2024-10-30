import React from 'react'
import { Link } from 'react-router-dom';

const CharacterByActorComp = ({alter_ego, characters}) => {
    if((alter_ego !== characters))
        return (<p>{characters}</p>);

    return (<></>);
}


export const HeroCard = ({hero}) => {
    
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;
    //? for some reason, doesnt work to call the img from a parent folder, if its an img,
    //?     i need to call it from out src, and assets (somethign to do with react vite)
    const heroImg = `/assets/udemyBC/06-heoresSpa/heroes/${id}.jpg`;
        
    return (
        <div className='col '>
            <div className='card'>
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImg} className='card-img' alt={superhero}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                //* option 1:
                                //(alter_ego !== characters) && (<p>{characters}</p>)
                                
                                //* option 2:
                                //characterByActorComp(alter_ego, characters)
                            }

                            {/* the best option: */}
                            <CharacterByActorComp alter_ego={alter_ego} characters={characters} />
                            

                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                More Info...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}