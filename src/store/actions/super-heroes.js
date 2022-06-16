export const ADD_SUPER_HEROES = 'ADD_SUPER_HEROES';
export const ADD_SUPER_HERO = 'ADD_SUPER_HERO';
export const DELETE_SUPER_HEROES = 'DELETE_SUPER_HEROES';

export function addSuperHeroes(superHeroesList) {
    return { type: ADD_SUPER_HEROES, list: superHeroesList }
};

export function addSuperHero(superHero) {
    return { type: ADD_SUPER_HERO, superHero: superHero }
};

export function deleteSuperHeroes() {
    return { type: DELETE_SUPER_HEROES }
};
