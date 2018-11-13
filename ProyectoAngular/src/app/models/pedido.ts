import { Plato } from './plato';

export interface Pedido {
    id?: string;
    estado?: number;
    fecha?: Date;
    numorden?: number;
    platos?: Plato[];
    subtotal?: number;
    ivatotal?: number;
    preciototal?: number;
    cliente?: string;
}
