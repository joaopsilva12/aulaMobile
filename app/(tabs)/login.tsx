import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

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
            <Text style={ style.titulo }>
                Login no Sistema
            </Text>
            <TextInput style={ style.input }
                placeholder="E-mail"
                value={ email }
                onChangeText={ setEmail }
            />
            <TextInput style={ style.input }
                placeholder="Senha"
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
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        padding: 10,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#eee8e8ff',
        marginBottom: 15,
    },
    
    input:{
        borderColor: "#000",
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth:1,
        padding:10,
        marginBottom:10,
    }
});