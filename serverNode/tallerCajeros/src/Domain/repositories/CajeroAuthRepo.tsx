import { Cajero } from '../entities/Cajero';

export interface AuthRepository {
    register(cajero: Cajero): Promise<any>;
}