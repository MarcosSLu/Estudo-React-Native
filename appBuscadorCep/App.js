
import React, { useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, keyboardType, Keyboard } from 'react-native';

import api from './src/services/api';


export default function App() {

  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState(null)

  const inputRef = useRef(null)

  async function buscar() {
    if (cep == '') {
      alert('Digite um CEP válido')
      setCep('')
      return
    }

    try {
      const response = await api.get(`/${cep}/json`)
      console.log(response.data)
      setCepUser(response.data)
      Keyboard.dismiss()
    } catch (error) {
      console.log('Error: ' + error)
    }
  }

  function limpar() {
    setCep('')
    inputRef.current.focus()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text} >Digite o CEP desejado:</Text>
        <TextInput
          style={styles.input}
          placeholder='EX: 13453.803'
          value={cep}
          onChangeText={(e) => setCep(e)}
          keyboardType='numeric'
          ref={inputRef}
        />

      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#1D75CD' }]}
          onPress={buscar}
        >
          <Text style={[styles.btnText, { backgroundColor: '#1D75CD' }]}>Buscar</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#CD3E1D' }]}
          onPress={limpar}
        >
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&
      <View style={styles.resultado}>
        <Text style={styles.itemText}>Cep:  {cepUser.cep} </Text>
        <Text style={styles.itemText}>Logradouro: {cepUser.logradouro} </Text>
        <Text style={styles.itemText}>Bairro: {cepUser.bairro} </Text>
        <Text style={styles.itemText}>Cidade: {cepUser.localidade} </Text>
        <Text style={styles.itemText}>Estado: {cepUser.estado} </Text>
      </View>
      
      }
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10
  },
  btnText: {
    fontSize: 20,
    color: '#FFF'
  },
  resultado: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 20,
  }

})


