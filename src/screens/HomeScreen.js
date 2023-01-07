import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import ListItems from '../components/ListItems'

const HomeScreen = () => {

  const casas = [
    {
        nombre: 'The Willows',
        direccion: '3517 W. Gray St. Utica',
        habitaciones: '3',
        baños: '2',
        superficie: '230 ft',
        renta: '$440/m',
        evaluacion: '4.7',
        icono: 'corazon',
        id: '001',
    },
    {
        nombre: 'Orchard House',
        direccion: '3517 W. Gray St. Utica',
        habitaciones: '3',
        baños: '2',
        superficie: '230 ft',
        renta: '$440/m',
        evaluacion: '4.7',
        icono: 'corazon',
        id: '002',
    },
    {
        nombre: 'Orchard House',
        direccion: '3517 W. Gray St. Utica',
        habitaciones: '3',
        baños: '2',
        superficie: '230 ft',
        renta: '$440/m',
        evaluacion: '4.7',
        icono: 'corazon',
        id: '003',
    },
    {
        nombre: 'The Willows',
        direccion: '3517 W. Gray St. Utica',
        habitaciones: '3',
        baños: '2',
        superficie: '230 ft',
        renta: '$440/m',
        evaluacion: '4.7',
        icono: 'corazon',
        id: '004',
    },
    {
        nombre: 'Corner House',
        direccion: '3517 W. Gray St. Utica',
        habitaciones: '3',
        baños: '2',
        superficie: '230 ft',
        renta: '$440/m',
        evaluacion: '4.7',
        icono: 'corazon',
        id: '005',
    },
    
  ]
  return (
    <SafeAreaView>

      <FlatList
          data={ casas }
          keyExtractor = { (item) => item.id }
          renderItem ={ ({item, index}) => <ListItems item = { item }/>}
      />

    </SafeAreaView>
  )
}

export default HomeScreen