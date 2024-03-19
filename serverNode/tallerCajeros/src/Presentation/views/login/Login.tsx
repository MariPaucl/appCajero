import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInputs';
import styles from './Styles';

export const LoginScreen = () => {
    const {correo, passCajero, onChange, login} = useViewModel();
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
            <Text style={styles.logoText}>BIENVENIDO CAJERO!</Text>
            </View>
            <View style={styles.form}>
            <Text style={styles.formText}>INICIA SESION</Text>
            <ScrollView>
            <CustomTextInput
                image={require('../../../../assets/email.png')}
                placeholder='Correo electronico'
                keyboardType='email-address'
                property='correo'
                onChangeText={onChange}
                value={correo}
            />
            <CustomTextInput
                image={require('../../../../assets/pass.png')}
                placeholder='Contraseña'
                keyboardType='default'
                secureTextEntry={true}
                property='passCajero'
                onChangeText={onChange}
                value={passCajero}
            />

            <View style={{marginTop: 30}}>
                <RoundedButton text='CONTINUAR' onPress={() => login()}/>
            </View>
            <View style={styles.link}>
            <TouchableOpacity onPress={() => navigation.navigate('VentasScreen')}><Text style={styles.linkText}>Ventas</Text></TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </View>
        );
    }