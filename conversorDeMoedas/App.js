import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { PickerItem } from './src/Picker';
import { api } from './src/services/api';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(false)
  const [moedaBValor, setMoedaBValor] = useState(null)

  const [valorMoeda, setValorMoeda] = useState(null)
  const [valorConvertido, setValorConvertido] = useState('')

  const [moedaSelecionada, setMoedaSelecionada] = useState(null)

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all/')
      let arrayMoedas = []
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        })
      })
      setMoedas(arrayMoedas)
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false)
    }

    loadMoedas()
  }, [])
  async function converter(){
    if (moedaBValor === 0 || moedaBValor === '' || moedaBValor === null){
      return
    }
    const response = await api.get(`/all/${moedaSelecionada}-BRL`)
    //alert(response.data[moedaSelecionada].ask)

    let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBValor) )

    setValorConvertido(`${resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    setValorMoeda(moedaBValor)
    Keyboard.dismiss()
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101215' }}>
        <ActivityIndicator color='#FFF' size='large' />

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione a sua moeda</Text>
        <PickerItem
          moedas={moedas}
          moedaSelecionada={moedaSelecionada}
          onChange={(moeda) => {
            setMoedaSelecionada(moeda)
          }}
        />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
        <TextInput
          placeholder='Ex: 1.50'
          style={styles.input}
          keyboardType='numeric'
          value={moedaBValor}
          onChangeText={(valor) => setMoedaBValor(valor)}
        />
      </View>
      <TouchableOpacity style={styles.btnArea} onPress={converter}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>

      {valorConvertido !== 0 && (
        <View style={styles.areaResultado}>
          <Text style={styles.valorConvertido}>
            {valorMoeda} {moedaSelecionada}
          </Text>

          <Text style={{ fontSize: 18, margin: 8, color: '#000' }}>
            corresponde a:
          </Text>

          <Text style={styles.valorConvertido}>
            {valorConvertido}
          </Text>

        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda: {
    marginTop: 15,
    backgroundColor: '#F9F9F9',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 9,
    marginBottom: 2
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5,
  },
  areaValor: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    paddingTop: 8,
    paddingBottom: 8
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000'
  },
  btnArea: {
    width: '90%',
    height: 45,
    backgroundColor: '#FB4B57',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  valorConvertido: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  }
});
