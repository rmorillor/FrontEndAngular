export interface Publicadores {
    ok: boolean;
    publicador: Publicador[];
}

export interface Publicador {
    _id?: string;
    codigo: string;
    descripcion: string;
    cantidadpublicaciones: number;
    __v?: number;
}