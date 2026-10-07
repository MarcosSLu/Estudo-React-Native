import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import Pessoa from './src/Pessoa'


export default function App() {

  const [feed, setFeed] = useState([
    {id: 1, nome: 'Marcos Lú', idade: 27, email: 'mlu.98@outlook.com'},
    {id: 2, nome: 'Flora Lú', idade: 93, email: 'flora@outlook.com'},
    {id: 3, nome: 'Maria Fernanda', idade: 30, email: 'maria@outlook.com'},
    {id: 4, nome: 'Aloisio', idade: 58, email: 'alo@outlook.com'},
    {id: 5, nome: 'Magali', idade: 55, email: 'maga@outlook.com'}
  ])
  return (
    <View style={styles.container}>
      <Text>oii</Text>
      <FlatList
      data={feed}
      renderItem={({item}) => <Pessoa data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})

