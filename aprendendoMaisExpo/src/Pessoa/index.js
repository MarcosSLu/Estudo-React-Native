import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Pessoa(props){
  return(
    <View style={styles.areaPessoa}>
      <Text style={styles.texto}> {props.data.id}</Text>
      <Text style={styles.texto}> {props.data.nome}</Text>
      <Text style={styles.texto}> {props.data.idade} anos</Text>
      <Text style={styles.texto}> {props.data.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  areaPessoa:{
    backgroundColor: '#121212',
    height: 200, 
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto:{
    color: '#FFF',
    margin: 10,
    fontSize: 24
  }
})