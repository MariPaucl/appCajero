import { AuthRepositoryImpl } from '../../../Data/repositories/VentaAuthRepo';
import { Venta } from '../../entities/Venta';

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (venta: Venta) =>{
    return await register(venta);
}