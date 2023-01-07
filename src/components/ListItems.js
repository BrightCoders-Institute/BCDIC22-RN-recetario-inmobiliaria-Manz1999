
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItems = ({ item }) => {

    const {nombre, direccion, habitaciones, baños, superficie, renta, evaluacion, icono, id} = item

  return (
    <View style = { styles.container }>
      <Text>{nombre}</Text>
      <Text>{direccion}</Text>
      <Text>{habitaciones}</Text>
      <Text>{baños }</Text>
      <Text>{superficie}</Text>
      <Text>{renta}</Text>
      <Text>{evaluacion}</Text>
    </View>
  )
}   

    const styles = StyleSheet.create({

        container: {
            backgroundColor: '#f1f2f1',
            padding: 10,
            marginBottom: 10,
        }
    })
export default ListItems