import React, {useState} from 'react';

export const useViewModel = () => {
    const [values, setValues] = useState({
        idCajero:'',
        nomCliente:'',
        valor:'',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = async () => {
        try {
            const response = await fetch('http://192.168.0.15:3000/api/ventas/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            if (!response.ok) {
                throw new Error('Error al registrar la venta');
            }
        } catch (error) {
            throw error;
        }
    };

    return {
        ...values,
        onChange,
        register
    }
}

export default useViewModel;