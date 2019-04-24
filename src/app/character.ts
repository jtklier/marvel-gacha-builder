export interface Character {
    id: number;
    name: string;
    baseStats: {
        health: number;
        energy: number;
        strength: number;
        toughness: number;
        intelligence: number;
        fortitude: number;
        speed: number;
    };
}
