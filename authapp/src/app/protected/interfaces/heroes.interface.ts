export interface Heroes {
    ok: boolean;
    heroe: Heroe[];
}

export interface Heroe {
    _id?: string;
    id?: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
    alt_img?: string;
    __v?: number;
}