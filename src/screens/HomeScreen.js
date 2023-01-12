import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import ListItems from '../components/ListItems'
import data from '../data/data.json'

const HomeScreen = () => {

  return (
    <SafeAreaView>

      <FlatList
          data={ data }
          keyExtractor = { (item) => item.id }
          renderItem ={ ({item, index}) => <ListItems item = { item }/>}
      />

    </SafeAreaView>
  )
}

export default HomeScreen