import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import ResultIMC from './ResultIMC'

function Form() {
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageResultIMC, setMessageResultIMC] = useState(
        'Preencha os dados para calcular seu IMC'
    )
    const [resultIMC, setResultIMC] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    // Função para calcular o IMC
    function imcCalculator() {
        setResultIMC((peso / (altura * altura)).toFixed(2))
    }

    // Função para validar o formulário e chamar a função de calcular o IMC
    function validationForm() {
        if (altura !== null && peso !== null) {
            imcCalculator()
            setTextButton('Calcular Novamente')
            setMessageResultIMC('Seu IMC é:')
        } else {
            setMessageResultIMC('Preencha os dados para calcular seu IMC')
            setResultIMC(null)
            setTextButton('Calcular')
        }
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    onChangeText={setAltura}
                    value={altura}
                />
                <Text>Peso</Text>
                <TextInput
                    placeholder="EX: 75.70"
                    keyboardType="numeric"
                    onChangeText={setPeso}
                    value={peso}
                />
                <Button title={textButton} onPress={validationForm} />
            </View>
            <ResultIMC
                messageResultIMC={messageResultIMC}
                resultIMC={resultIMC ?? ''}
            />
        </View>
    )
}

export default Form
