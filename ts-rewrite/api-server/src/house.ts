export enum House {
    Island = 'island',
    DRC = 'drc',
}

const house_map: { [key: string]: House } = {
    'island': House.Island,
    'drc': House.DRC,
}

export function getHouse(house: string): House {
    house = house.toLowerCase();
    if (!(house in house_map)) {
        throw new Error(`Invalid house: ${house}`);
    }
    return house_map[house];
}

export function getHouseStops(house: House): string[] {
    switch (house) {
        case House.Island:
            return ['7097'];
        case House.DRC:
            return ['7097']; // TODO: Add 69/67 stops
        default:
            throw new Error(`Invalid house: ${house}`);
    }
}
