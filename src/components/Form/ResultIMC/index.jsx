import React from 'react'
import { View, Text } from 'react-native'

function ResultIMC({ messageResultIMC, resultIMC }) {
    return (
        <View>
            <Text>{messageResultIMC + ' ' + resultIMC}</Text>
        </View>
    )
}

export default ResultIMC
