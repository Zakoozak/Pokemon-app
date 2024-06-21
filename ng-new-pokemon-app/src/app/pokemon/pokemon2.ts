export class Pokemon{
    id: number;
    name: string;
    stats : stats; 
    picture: string;
    types: Array<string>;
    created : Date;
}

export class stats{
    hp : number; 
    attack: number; 
    defense: number; 
    special_attack: number; 
    special_defense: number; 
    speed: number; 
}