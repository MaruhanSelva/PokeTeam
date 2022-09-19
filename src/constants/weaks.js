// constants for weaknesses

export function getWeaks(type) {
    switch(type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fight":
            return fight;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return;
    }
}

export const bug = ["fire", "flying", "rock"];
export const dark = ["fight", "bug", "fairy"];
export const dragon = ["ice", "dragon", "fairy"];
export const electric = ["ground"];
export const fairy = ["poison", "steel"];
export const fight = ["flying", "psychic", "fairy"];
export const fire = ["water", "rock", "ground"];
export const flying = ["electric", "ice", "rock"];
export const ghost = ["ghost", "dark"];
export const grass = ["fire", "ice", "flying", "poison", "bug"];
export const ground = ["water", "grass", "ice"];
export const ice = ["fire", "fight", "rock", "steel"];
export const normal = ["fight"];
export const poison = ["ground", "psychic"];
export const psychic = ["bug", "ghost", "dark"];
export const rock = ["water", "grass", "fight", "ground", "steel"];
export const steel = ["fire", "fight", "ground"];
export const water = ["electric", "grass"];