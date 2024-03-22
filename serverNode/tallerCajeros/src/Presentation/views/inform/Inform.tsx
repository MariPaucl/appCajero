import React, { useState } from 'react';
import { View, Image, Text, Button, TextInput, Alert, ScrollView } from 'react-native';
import styles from './InformStyles';

export const InformScreen = () => {
    const [tableData, setTableData] = useState([]);
    const [totalSales, setTotalSales] = useState(0);
    const [fechaDia, setFechaDia] = useState('');
    const [fechaMes, setFechaMes] = useState('');
    const [idCajero, setIdCajero] = useState('');

    const handleGenerateReport = async () => {
        try {
            const response = await fetch('http://192.168.0.15:3000/api/info/show', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idCajero, fechaDia, fechaMes }),
            });
            const data = await response.json();
            console.log('Data: ', data);

            if (response.ok) {
                const { ventas, totalVentas } = data;
                setTableData(ventas);
                setTotalSales(totalVentas);
            } else {
                Alert.alert('Error', 'Error al generar el informe');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Error al generar el informe');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../../../assets/cajero.jpg')}
                style={styles.imageBackground}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>GENERAR INFORME DIARIO</Text>
                <View style={styles.inputDate}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Ingrese el Dia'
                        keyboardType='numeric'
                        onChangeText={setFechaDia}
                    />
                </View>
                <View style={styles.inputDate}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Ingrese el Mes'
                        keyboardType='numeric'
                        onChangeText={setFechaMes}
                    />
                </View>
                <View style={styles.inputDate}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Ingrese el ID del Cajero'
                        keyboardType='numeric'
                        onChangeText={setIdCajero}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title='GENERAR' color='#D32F2F' onPress={handleGenerateReport} />
                </View>
            </View>
            <View style={styles.informe}>
                <Text style={styles.informeText}>RESULTADOS:</Text>
                <ScrollView>
                    <View style={styles.ventasContainer}>
                        {tableData.map((venta, index) => (
                            <View key={index}>
                                <Text>Cajero: {venta.nombre} {venta.apellido} - Venta: {venta.idVenta} - Cliente: {venta.nomCliente} - Valor: {venta.valor} - Fecha: {venta.fechaVenta}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>TOTAL VENTAS: </Text>
                        <Text>{totalSales}</Text>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

export default InformScreen;