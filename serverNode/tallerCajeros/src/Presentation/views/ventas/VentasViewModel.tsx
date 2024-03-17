import React, {useState} from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/VentaRegisterAuth';

export const VentasViewModel = () => {
    const [values, setValues] = useState({
        idCajero:'',
        nomCliente:'',
        valor:'',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = async() => {
        const { result, error } = await RegisterAuthUseCase(values);
        console.log('Result' + JSON.stringify(result));
        console.log('Error' + error);
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default VentasViewModel;