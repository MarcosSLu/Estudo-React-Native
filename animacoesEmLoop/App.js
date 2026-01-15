import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function App() {

  const larguraAnimada = useRef(new Animated.Value(0)).current
  const alturaAnimada = useRef(new Animated.Value(50)).current



  useEffect(() => {

    Animated.loop([
      Animated.sequence([
        Animated.timing(larguraAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }),
        Animated.timing(alturaAnimada, {
          toValue: 100,
          duration: 4000,
          useNativeDriver: false
        })
      ]).start()
    ])

  }, [])

  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange: [0, 100], //entrada
    outputRange: ['0%', '100%'] //Vai sair de 0% a 100%
  })

  let porcentagemAltura = alturaAnimada.interpolate({
    inputRange: [50, 100], //entrada
    outputRange: ['5%', '100%'] //Vai sair de 5% a 100%
  })

  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          backgroundColor: '#4169E1',
          justifyContent: 'center',
          // borderRadius: 50
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            color: '#FFF',
          }}
        > </Text>
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