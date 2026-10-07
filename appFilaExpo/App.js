import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  function funcao() {
    alert("Disparou!!!")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto} >Pessoas no restaurante:</Text>

      <View style={styles.main}>
        <View style={styles.mainArea}>
          <Text style={styles.texto}>10</Text>
        </View>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={funcao}>
          <View style={styles.btnArea} >
            <Text style={styles.btnTexto} >Adicionar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btn2]} onPress={funcao}>
          <View style={styles.btnArea} >
            <Text style={[styles.btnTexto, styles.btnTexto2]} >Remover</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
  },
  main: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderBlockColor: '#121212',
    borderRadius: 10,

  },
  mainArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    flexDirection: 'row'
  },
  btn: {
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: '#DD7D22',
    borderRadius: 10,
    margin: 10,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    borderColor: '#121212',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7D22',
  },
  btnTexto2: {

    color: '#121212',
  }
}) 