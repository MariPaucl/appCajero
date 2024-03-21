import { Venta } from "../../Domain/entities/Venta";
import { AuthRepository } from "../../Domain/repositories/VentaAuthRepo";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
    async register(venta: Venta) {
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/ventas/create', venta);
            return Promise.resolve({ error: undefined, result: response.data
            });
        } catch (error) {
            let e = (error as Error).message;
            console.log('Error: ' + e);
            return Promise.resolve({ success: false, error: e, result: undefined });
        }
    }
}