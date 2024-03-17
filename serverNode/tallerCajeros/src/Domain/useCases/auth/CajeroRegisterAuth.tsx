import { AuthRepositoryImpl } from '../../../Data/repositories/CajeroAuthRepo';
import { Cajero } from '../../entities/Cajero';

const { register } = new AuthRepositoryImpl();

export const RegisterAuthUseCase = async (cajero: Cajero) =>{
    return await register(cajero);
}