import React, {useState} from 'react';

export const LoginViewModel = () => {
    const [values, setValues] = useState({
        correo:'',
        passCajero:'',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const login = async() => {
        console.log('Result: ' + JSON.stringify(values));
    }

    return {
        ...values,
        onChange,
        login
    }
}

export default LoginViewModel;