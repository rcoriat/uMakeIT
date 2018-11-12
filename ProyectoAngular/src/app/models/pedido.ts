export interface Pedido {
    id?: string;
    estado?: string;
    fecha?: Date;
    numorden?: number;
    platos?: string[];
    subtotal?: number;
    ivatotal?: number;
    preciototal?: number;
}
