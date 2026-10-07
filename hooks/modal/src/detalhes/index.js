import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Detalhes(props) {
    return (
        <View style={styles.container}>
            <Text>Seja bem vindo!!!</Text>

            <Button
                title='Fechar'
                onPress={props.fechar}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItemns: 'center'
  },

})