import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInputs';
import styles from './Styles';

export const HomeScreen = () => {
    const {numId, nombre, apellido, correo, passCajero, onChange, register} = useViewModel();
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
            <Text style={styles.formText}>REGISTRATE</Text>
            <TouchableOpacity onPress={() => navigation.navigate('VentasScreen')}><Text>Ventas</Text></TouchableOpacity>
            <ScrollView>
            <CustomTextInput
                image={require('../../../../assets/ID.png')}
                placeholder='No. Identificacion'
                keyboardType='numeric'
                property='numId'
                onChangeText={onChange}
                value={numId}
            />
            <CustomTextInput
                image={require('../../../../assets/user.png')}
                placeholder='Nombres'
                keyboardType='default'
                property='nombre'
                onChangeText={onChange}
                value={nombre}
            />
            <CustomTextInput
                image={require('../../../../assets/user.png')}
                placeholder='Apellidos'
                keyboardType='default'
                property='apellido'
                onChangeText={onChange}
                value={apellido}
            />
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
                <RoundedButton text='CONTINUAR' onPress={() => register()}/>
            </View>
            <View style={styles.link}>
            <Text>Ya tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('VentasScreen')}><Text style={styles.linkText}>Inicia Sesion</Text></TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </View>
        );
    }