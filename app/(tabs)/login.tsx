import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

import Toast from 'react-native-toast-message';

import { useState } from 'react';

export default function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const autenticar = async () => {
        Toast.show({
            type: 'success',
            text1: 'Sucesso',
            text2: 'Login efetuado!'
        })
    }

    return(
        <View style={ style.container }>
            <Toast />
            <Text>
                Login no Sistema
            </Text>

            <TextInput
                placeholder='Email'
                value={ email }
                onChangeText={ setEmail }
            />

            <TextInput
                placeholder='Senha'
                value={ senha }
                onChangeText={ setSenha }
            />

            <Button
                title="Login"
                onPress={ autenticar }
            />

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#eee8eff',
        marginBottom: 15,
    },
    input: {
        borderColor: "gray",
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    }
});