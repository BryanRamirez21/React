import React, { useMemo } from 'react'
import { getHeoresByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

    const heores = useMemo(() => getHeoresByPublisher(publisher), [publisher]);

    return (
        <div className='row rows-cols-1 rows-cols-md-3 g-3'>
            {heores.map((hero, key) => (
                <HeroCard key={hero.id} hero={hero} />
                //you could've done this:
                //  <HeroCard key={hero.id} {...hero} />
            ))}
            
        </div>
    )
}
