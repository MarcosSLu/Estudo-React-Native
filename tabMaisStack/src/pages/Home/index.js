import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'


export default function Home(){
    const navigation = useNavigation()

    function navegaDetalhes(){
        navigation.navigate('Detalhes')
    }

    function abrirDrawer(){
        navigation.openDrawer()
    }

    return(
        <View style={styles.container}>
            <Text> Página Home</Text>
            <Button title="Ir para Detalhes" onPress={navegaDetalhes}/>
            <Button title="Abrir Drawer" onPress={abrirDrawer}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})