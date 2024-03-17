import { Cajero } from "../../Domain/entities/Cajero";
import { AuthRepository } from "../../Domain/repositories/CajeroAuthRepo";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
    async register(cajero: Cajero) {
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/cajeros/create', cajero);
            return Promise.resolve({ error: undefined, result: response.data
            });
        } catch (error) {
            let e = (error as Error).message;
            console.log('Error' + e);
            return Promise.resolve({ success: false, error: e, result: undefined });
        }
    }
}