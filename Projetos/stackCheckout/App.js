import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{alignItems: 'center'}}>
        
      <Image
        source={{ uri: 'https://imgcentauro-a.akamaihd.net/800x800/9971KA19A20.jpg' }}
        style={styles.fotoProduto}
        />
      <Text style={styles.textoProduto}>Camisa do São Paulo III 25/26 Jogador New Balance Masculina</Text>
        </View>


      <Text style={styles.textoValor}>R$:1.000,00</Text>
      <Text style={styles.textoParcelamento}>12x de R$100,00</Text>
      
      <View style={styles.tamanho}>
        <TouchableOpacity
          style={[styles.btnTamanho, { borderColor: 'red', borderWidth: 1 }]}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>P</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnTamanho, { borderColor: 'red', borderWidth: 1 }]}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnTamanho, { borderColor: 'red', borderWidth: 1 }]}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>G</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnTamanho, { borderColor: 'red', borderWidth: 1 }]}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>GG</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.viewCep} >
        <TextInput
          style={styles.inputCep}
          placeholder='Digite seu CEP aqui!'
        />

        <TouchableOpacity
          style={[styles.areaBtn, { backgroundColor: 'red', height: '100%' }]}
          onPress={() => alert('Button Pressed!')}
        >
          <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold'}}>calcular</Text>
        </TouchableOpacity>

      </View>


      <View style={styles.vieWBtn}>
        <TouchableOpacity
          style={[styles.areaBtn, { backgroundColor: 'red', }]}
          onPress={() => alert('Button Pressed!')}
        >
          <Text style={{ color: '#fff', fontSize: 18 }}>Comprar Agora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.areaBtn, { borderColor: 'red', borderWidth: 1 }]}
          onPress={() => alert('Button Pressed!')}
        >
          <Text style={{ color: 'red', fontSize: 18 }}>Adicionar no carrinho</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  fotoProduto: {
    width: 300,
    height: 300,
    marginBottom: 20
  },
  viewCep: {
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  inputCep: {
    width: '75%',
    height: 50
  },
  tamanho: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  btnTamanho: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 5
  },
  vieWBtn: {
    width: '100%',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  textoProduto: {
    fontSize: 24,
    marginBottom: 2
  },
  areaBtn: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center'
  },
  textoValor: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20
  },
  textoParcelamento: {
    fontSize: 14
  }


});
