export interface Roles {
    admin?: boolean;
    cliente?: boolean;
}

export interface Usuario {
    id?: string;
    roles?: Roles;
    apellido?: string;
    pass?: string;
    correo?: string;
    direccion?: string;
    edad?: number;
    nombre?: string;
    sexo?: string;
    admin?: boolean;
}
