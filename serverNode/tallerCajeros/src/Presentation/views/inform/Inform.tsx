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
                placeholder='Ingrese el dia'
                keyboardType='default'
                />
            </View>
            <View style={{marginTop: 20}}>
            <Button title='GENERAR' color='#D32F2F' onPress={() => Alert.alert('Generar')}/>
            </View>
            </View>
            <View style={styles.informe}>
                <Text style={styles.informeText}>RESULTADOS:</Text>
                <ScrollView>
                    <Text>Cliente: Martha Suarez, Valor: 50000, Fecha: 25/11/05, Cajero: Juan Mendez</Text>
                </ScrollView>
            </View>
            </View>
)}
