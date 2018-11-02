export interface Pedido{
    id?: string;
    estado?: string;
    fecha?: Date;
    numorden?: number;
    platos?: string[];
    preciototal?: number;
}