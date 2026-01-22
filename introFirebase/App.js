import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import FormUsers from "./src/FormUsers"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./src/firebaseConection";

export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          email: user.email,
          uid: user.uid
        })
        return
      }

      setAuthUser(null)
    })
  }, [])

  async function handleCreateUser() {
    const user = await createUserWithEmailAndPassword(auth, email, senha)
    // console.log(user)
  }

  async function handleLogin() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((user) => {
        // console.log(user)
        setAuthUser({
          email: user.user.email,
          uid: user.user.uid
        })
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  async function handleLogout() {
    await signOut(auth)
    setAuthUser(null)
  }

  if (authUser) {
    return (
      <View style={styles.container}>
        <FormUsers />
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Text style={{ fontSize: 15, color: '#000', marginLeft: 8, marginBottom: 14, marginTop: 14 }}>
        Usuário Logado: {authUser && authUser.email}
      </Text>


      <Text style={{ marginLeft: 8, fontSize: 18, color: '#000' }}>Email: </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        passwordRules={'Digite seu email aqui...'}
      />

      <Text style={{ marginLeft: 8, fontSize: 18, color: '#000' }}>Senha: </Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        passwordRules={'Digite sua senha aqui...'}
      />

      <TouchableOpacity style={styles.areaBtn} onPress={handleLogin}>
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.areaBtn} onPress={handleCreateUser}>
        <Text style={styles.textBtn}>Cadastrar</Text>
      </TouchableOpacity>

      {authUser && ( 
        <TouchableOpacity style={[styles.areaBtn, { backgroundColor: 'red' }]} onPress={handleLogout}>
          <Text style={styles.textBtn}>Sair da conta</Text>
        </TouchableOpacity>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  input: {
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 1,
    marginBottom: 14
  },
  areaBtn: {
    backgroundColor: '#000',
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
    borderRadius: 20,
    margin: 10
  },
  textBtn: {
    color: '#FFF',
    textAlign: 'center',
  }
})