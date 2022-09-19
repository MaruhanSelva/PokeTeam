// functions for strengths calculations
export function getStrong(type) {
    switch(String(type)) {
        case "bug":
            return bug_s;
        case "dark":
            return dark_s;
        case "dragon":
            return dragon_s;
        case "electric":
            return electric_s;
        case "fairy":
            return fairy_s;
        case "fighting":
            return fight_s;
        case "fire":
            return fire_s;
        case "flying":
            return flying_s;
        case "ghost":
            return ghost_s;
        case "grass":
            return grass_s;
        case "ground":
            return ground_s;
        case "ice":
            return ice_s;
        case "normal":
            return normal_s;
        case "poison":
            return poison_s;
        case "psychic":
            return psychic_s;
        case "rock":
            return rock_s;
        case "steel":
            return steel_s;
        case "water":
            return water_s;
        default:
            return [];
    }
}

export function getDualStrengths(type1, type2) {
    let type1strengths = getStrong(type1);
    let type2strengths = getStrong(type2);
    let strengths = type1strengths.concat(type2strengths);

    return strengths;
}

export function getVulnerabilities(strengths) {
    let difference = types.filter(x => !strengths.includes(x));
    return difference;
}

export const bug_s = ["grass", "psychic", "dark"];
export const dark_s = ["psychic", "ghost"];
export const dragon_s = ["dragon"];
export const electric_s = ["water", "flying"];
export const fairy_s = ["fighting", "dragon", "dark"];
export const fight_s = ["normal", "ice", "rock", "dark", "steel"];
export const fire_s = ["grass", "ice", "bug", "steel"];
export const flying_s = ["grass", "fighting", "bug"];
export const ghost_s = ["psychic", "ghost"];
export const grass_s = ["water", "ground", "rock"];
export const ground_s = ["fire", "electric", "poison", "rock", "steel"];
export const ice_s = ["grass", "ground", "flying", "dragon"];
export const normal_s = [];
export const poison_s = ["grass", "fairy"];
export const psychic_s = ["fighting", "poison"];
export const rock_s = ["fire", "ice", "flying", "bug"];
export const steel_s = ["ice", "rock", "fairy"];
export const water_s = ["fire", "ground", "rock"];

export const types = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost",
    "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];