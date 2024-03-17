import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './VentasViewModel';
import { CustomTextInput } from '../../components/CustomTextInputs';
import styles from './VentasStyles';

export const VentasScreen = () => {
    const {idCajero, nomCliente, valor, onChange, register} = useViewModel();
    const navigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Image
            source={ require('../../../../assets/cajero.jpg')}
            style={styles.imageBackground}
            />
        <View style={styles.logoContainer}>
            <Image
            source={require('../../../../assets/icono.png')}
            style={styles.logoImage}
            />
            <Text style={styles.logoText}>VENTAS</Text>
            </View>
            <View style={styles.form}>
            <ScrollView>
            <Text style={styles.formText}>REGISTRAR VENTA</Text>
            <CustomTextInput
                image={require('../../../../assets/user.png')}
                placeholder='Cajero'
                keyboardType='default'
                property='idCajero'
                onChangeText={onChange}
                value={idCajero}
            />
            <CustomTextInput
                image={require('../../../../assets/user.png')}
                placeholder='Nombre Cliente'
                keyboardType='default'
                property='nomCliente'
                onChangeText={onChange}
                value={nomCliente}
            />
            <CustomTextInput
                image={require('../../../../assets/value.png')}
                placeholder='Valor'
                keyboardType='numeric'
                property='valor'
                onChangeText={onChange}
                value={valor}
            />

            <View style={{marginTop: 30}}>
                <RoundedButton text='GUARDAR' onPress={() => register()}/>
            </View>
                <View style={styles.linkInform}>
                    <Text>¿Quieres ver tu informe?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('InformScreen')}>
                        <Text style={styles.linkInformText}>Informe</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </View>
        );
    }