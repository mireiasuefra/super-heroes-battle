

import { ADD_SUPER_HEROES, ADD_SUPER_HERO, DELETE_SUPER_HEROES } from './../actions/super-heroes'

const initialState = {
    superHeroes: [],
};

function superHeroReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SUPER_HEROES:
            return { 
                ...state,
                superHeroes: action.list
             };
        case ADD_SUPER_HERO:
            return { 
                ...state,
                superHeroes: [ ...state.superHeroes, action.superHero]
             };
        case DELETE_SUPER_HEROES:
            return { 
                ...state,
                superHeroes: []
             };
        default:
            return state;
    }
}

export default superHeroReducer;
