import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Slider from '@react-native-community/slider';



export default function App() {

  const [carroSelecionado, setCarroSelecionado] = useState(0)
  const [carros, setCarros] = useState([
    { key: 0, nome: 'Gol Branco ap ', ano: '1989', valor: 'R$15.000,00' },
    { key: 1, nome: 'Gol Azul ', ano: '1994', valor: 'R$21.000,00' },
    { key: 2, nome: 'Corsa Chumbo Life ', ano: '2006', valor: 'R$13.000,00' },
    { key: 3, nome: 'BMW 320I ', ano: '2022', valor: 'R$180.000,00' }
  ])

  let carrosItem = carros.map((v, k) => { return <Picker.Item key={k} value={k} label={v.nome} /> })

  const [valor, setValor] = useState(0)

  const [status, setStatus] = useState(false)

  return (
    <View style={styles.container}>
      <View >
        <Picker
          selectedValue={carroSelecionado}
          onValueChange={(itemValue, indexValue) => setCarroSelecionado(itemValue)}
        >
          {carrosItem}


        </Picker>

        <Text style={styles.carro}> {carros[carroSelecionado].nome} </Text>
        <Text style={styles.carro}> {carros[carroSelecionado].ano} </Text>
        <Text style={styles.carro}> {carros[carroSelecionado].valor} </Text>
      </View>

      <View>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={valor}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          minimumTrackTintColor='red'
          maximumTrackTintColor='blue'
        />

        <Text style={styles.carro}> {valor} </Text>
      </View>

      <View>
          <Switch
          value={status}
          onValueChange={(statusSelecionado) => setStatus(statusSelecionado)}
          />

          <Text style={styles.carro}> {String(status ? 'Ativo' : 'Inativo')} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    display: 'flex',
  },
  carro: {
    marginTop: 5,
    fontSize: 15,
  },
});
