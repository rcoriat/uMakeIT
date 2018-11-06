import { Observable } from 'rxjs';
import { Reference } from '@angular/fire/firestore';
import { Extra } from './extra';

export interface Plato {
    id?: string;
    nombre?: string;
    descripcion?: string;
    precio?: number;
    disponibilidad?: boolean;
    personalizable?: boolean;
    cantidad?: number;
    imagen?: string;
    tipo?: string;
    extras?: Reference<Extra>[];
}
