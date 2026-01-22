import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";
import { db, auth} from './firebaseConection'
import { doc, getDoc, onSnapshot, setDoc, addDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import UserList from "./users";
import { signOut } from "firebase/auth";

export default function FormUsers() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cargo, setCargo] = useState('');

  const [users, setUsers] = useState([]);

  const [showForm, setShowForm] = useState(true);
  const [isEditing, setIsEditing] = useState('');


  useEffect(() => {
    function getDados() {
      const userRef = collection(db, 'users')
      onSnapshot(userRef, (snapshot) => {
        let lista = []

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo
          })
        })

        setUsers(lista)

      })

      // getDocs(userRef)
      //   .then((snapshot) => {
      //     let lista = []

      //     snapshot.forEach((doc) => {
      //       lista.push({
      //         id: doc.id,
      //         nome: doc.data().nome,
      //         idade: doc.data().idade,
      //         cargo: doc.data().cargo
      //       })
      //     })

      //     setUsers(lista)
      //   })
      //   .catch((erro) => {
      //     console.log(erro)
      //   })
    }

    getDados()
  }, [])




  async function handleRegister() {
    console.log(nome, idade, cargo)

    await addDoc(collection(db, 'users'), {
      nome: nome,
      idade: idade,
      cargo: cargo
    })
      .then(() => {
        console.log('Cadastrado com sucesso!')
        setNome('');
        setIdade('');
        setCargo('');
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  function handletogle() {
    setShowForm(!showForm)
  }

  function editUser(data) {
    setNome(data.nome)
    setIdade(data.idade)
    setCargo(data.cargo)
    setIsEditing(data.id);
  }

  async function handleEditUser(){
    const docRef = doc(db,'users', isEditing)
    await updateDoc(docRef, {
      nome: nome,
      idade: idade,
      cargo: cargo
    })

    setNome('')
    setIdade('')
    setCargo('')
    setIsEditing('')
  }

 async function handleLogout() {
    await signOut(auth)
  } 

  return (
    <View style={styles.container}>
      {showForm && (
        <View>
          <Text style={styles.label}>Nome: </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <Text style={styles.label}>Idade: </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu idade..."
            value={idade}
            onChangeText={(text) => setIdade(text)}
          />

          <Text style={styles.label}>Cargo: </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu cargo..."
            value={cargo}
            onChangeText={(text) => setCargo(text)}
          />

          {isEditing !== '' ? (
            <TouchableOpacity style={styles.button} onPress={handleEditUser}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          )}

        </View>
      )}
      <TouchableOpacity onPress={handletogle} style={{ marginTop: 8, alignItems: 'center', borderWidth: 1, borderRadius: 20, marginLeft: 8, marginRight: 8, marginTop: 16, }}>
        <Text style={{ textAlign: 'center', color: '#000', padding: 8 }}>
          {showForm ? 'Fechar formulário' : 'Abrir formulário'}
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 14, marginLeft: 8, fontSize: 20, color: '#000', }}> Usuários</Text>

      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <UserList data={item} handleEdit={(item) => editUser(item)} />}
      />

      <TouchableOpacity onPress={handleLogout} style={styles.buttonLogout}>
        <Text style={{color: '#FFF'}} >Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 16,
  },
  buttonText: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
  },
  label: {
    color: '#000',
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 8
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  list: {
    margin: 8,
  },
  buttonLogout: {
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    margin:  14,
    padding: 8,
    borderRadius: 4
  }
})