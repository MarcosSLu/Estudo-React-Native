import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { db } from "./src/firebaseConection";
import { doc, getDoc, onSnapshot, setDoc, addDoc, collection } from "firebase/firestore";

export default function App() {

  const [nome, setNome] = useState('Carregando');

  useEffect(() => {
    async function getDados() {

      //    const docref = doc(db, 'users', '1')
      //    getDoc(docref)
      //    .then((snapshot) => {
      //      setNome(snapshot.data()?.nome)
      //    })
      //   .catch((erro) => {
      //     console.log('erro: ')
      //      console.log(erro)
      //      
      //    })


      onSnapshot(doc(db, 'users', '1'), (snapshot) => {
        setNome(snapshot.data()?.nome)
      })
    }

    getDados()
  }, [])



  async function handleRegister() {
    // await setDoc(doc(db, 'users', '2'), {
    //   nome: 'Amaral',
    //   idade: 65,
    //   cargo: 'Motorista'
    //   .then(() => {
    //     console.log('Cadastrado com sucesso!')
    //   })
    //   .catch((erro) =>{
    //     console.log(erro)
    //   })
    // })

    await addDoc(collection(db, 'users'), {
      nome: 'Maria Frnanda',
      idade: '30',
      cargo: 'Psicóloga'
    }) 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {nome}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 20
  },
  buttonText: {
    padding: 8,
    color: '#FFF'
  }
})