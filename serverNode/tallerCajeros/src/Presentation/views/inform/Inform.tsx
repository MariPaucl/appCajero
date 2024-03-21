import React, {useState} from 'react';
import { View, Image, Text, Button, TextInput, KeyboardType, Alert, ScrollView } from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import styles from './InformStyles';

export const InformScreen = () => {
    // Datos de ejemplo para la tabla
    const [tableData, setTableData] = useState([]);
    const [totalSales, setTotalSales] = useState(0);
    const [fechaDia, setFechaDia] = useState('');
    const [fechaMes, setFechaMes] = useState('');

    const handleGenerateReport = async (idCajero: number) => {
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
                const { ventas } = data;
                setTableData(ventas);
                // Calcular la suma total de los valores de ventas
                let sum = 0;
                for (let venta of ventas) {
                    sum += Number(venta[3]); // Suponiendo que el valor de la venta está en la cuarta posición del arreglo
                }
                setTotalSales(sum);
            } else {
                Alert.alert('Error', 'Error al generar el informe');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Error al generar el informe');
        }
    };

    return (
        <View style={styles.container}>
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
                <View style={{marginTop: 20}}>
                    <Button title='GENERAR' color='#D32F2F' onPress={() => handleGenerateReport(1)}/>
                </View>
            </View>
            <View style={styles.informe}>
                <Text style={styles.informeText}>RESULTADOS:</Text>
                <ScrollView>
                    <View style={styles.tableContainer}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row data={['Cajero', 'Venta', 'Cliente', 'Valor', 'Fecha']} style={styles.head} textStyle={styles.text} />
                            <Rows data={tableData} textStyle={styles.text} />
                        </Table>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.totalText}>TOTAL VENTAS: </Text>
                        <Text>{totalSales}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}