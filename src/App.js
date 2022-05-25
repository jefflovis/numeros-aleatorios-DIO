import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero() {

        const novo_numero = Math.floor(Math.random() * 100)

        setNumero(novo_numero)
    }

    return(
    <SafeAreaView  style={style.container}>
    <Text style={style.numero}>{numero}</Text>
    <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.textButton}>Gerar Número</Text>
    </TouchableOpacity>
    </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor:'#FF0000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    numero: {
        fontSize: 150,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    botao: {
        backgroundColor: '#FFFFFF',
        width: '60%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    textButton: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default App;