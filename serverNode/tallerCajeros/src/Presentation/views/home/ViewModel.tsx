import React, {useState} from 'react';
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/CajeroRegisterAuth';

export const HomeViewModel = () => {
    const [values, setValues] = useState({
        numId:'',
        nombre:'',
        apellido:'',
        correo:'',
        passCajero:'',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = async() => {
        const { result, error } = await RegisterAuthUseCase(values);
        console.log('Result ' + JSON.stringify(result));
        console.log('Error ' + error);
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default HomeViewModel;