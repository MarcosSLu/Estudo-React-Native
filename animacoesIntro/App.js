import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function App() {

  const larguraAnimada = useRef(new Animated.Value(150)).current
  const alturaAnimada = useRef(new Animated.Value(50)).current
  const opacidadeAnimada = useRef(new Animated.Value(0)).current


  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacidadeAnimada,{
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
      }),

      Animated.parallel([
        Animated.timing(larguraAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(alturaAnimada, {
          toValue: 200,
          duration: 1000,
          useNativeDriver: false,
        })
      ]),

      Animated.timing(opacidadeAnimada, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start()
  }, [])
  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          width: larguraAnimada,
          height: alturaAnimada,
          opacity: opacidadeAnimada,
          backgroundColor: '#4169E1',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            color: '#FFF',
          }}
        > Carregando</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})