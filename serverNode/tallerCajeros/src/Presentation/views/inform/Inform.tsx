import { View, Image, Text, Button, TextInput, KeyboardType, Alert, ScrollView } from 'react-native';
import styles from './InformStyles';

export const InformScreen = () => {
    return (
        <View style={styles.container}>
            <Image
            source={require('../../../../assets/cajero.jpg')}
            style={styles.imageBackground}
            />
            <View style={styles.titleContainer}>
            <Text style={styles.title}>GENERAR INFORME DIARIO</Text>
            <View style={styles.inputDate}>
                <TextInput style={styles.formTextInput}
                placeholder='Ingrese el Dia'
                keyboardType='numeric'
                />
            </View>
            <View style={styles.inputDate}>
                <TextInput style={styles.formTextInput}
                placeholder='Ingrese el Mes'
                keyboardType='numeric'
                />
            </View>
            <View style={{marginTop: 20}}>
            <Button title='GENERAR' color='#D32F2F' onPress={() => Alert.alert('Generar')}/>
            </View>
            </View>
            <View style={styles.informe}>
                <Text style={styles.informeText}>RESULTADOS:</Text>
                <ScrollView>
                    <Text>Cajero: Paula Lopez, Venta: 1, Cliente: 'Carla Mendoza', Valor: 50000, Fecha: '17-03-2024 15:50:35'</Text>
                </ScrollView>
            </View>
            </View>
)}