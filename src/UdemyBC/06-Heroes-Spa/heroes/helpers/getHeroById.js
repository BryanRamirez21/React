import { heroes } from "../data/Heores"

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id)
}