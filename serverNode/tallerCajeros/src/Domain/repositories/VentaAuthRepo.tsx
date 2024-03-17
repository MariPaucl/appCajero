import { Venta } from '../entities/Venta';

export interface AuthRepository {
    register(venta: Venta): Promise<any>;
}