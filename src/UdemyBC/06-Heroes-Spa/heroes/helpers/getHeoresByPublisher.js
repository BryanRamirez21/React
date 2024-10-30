import {heroes} from '../data/Heores';

export const getHeoresByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valida publisher`)
    }

    return heroes.filter((hero) => hero.publisher === publisher);
}