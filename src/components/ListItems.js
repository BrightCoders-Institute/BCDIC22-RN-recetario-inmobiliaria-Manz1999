import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ListItems = ({ item }) => {

  const { nombre, direccion, habitaciones, baños, superficie, renta, evaluacion, icono, id } = item

  return (
    <View style={styles.container}>

      <View style={styles.containerimg}>
        <Image source={{ uri: 'https://photoshop-kopona.com/uploads/posts/2018-09/1537562905_88.jpg' }}
          style={styles.image} />
        <View style={styles.containerscore}>
          <AntDesign name="star" size={18} color="gold" />
          <Text style={styles.textscore}>4.7</Text>
        </View>
      </View>
      <View style={styles.containertext}>
        <Text style={styles.textname}>{nombre}</Text>
        <View style={styles.containeradress}>
          <EvilIcons name="location" size={26} color="black" />
          <Text style={styles.textadress}>{direccion}</Text>
        </View>
        <View style={styles.containerhouse}>
          <View style={styles.containerrooms}>
            <Ionicons name="bed-outline" size={24} color="gray" />
            <Text style={styles.textrooms}>{habitaciones}</Text>
          </View>
          <View style={styles.containerwc}>
            <FontAwesome name="bath" size={24} color="gray" />
            <Text style={styles.textwc}>{baños}</Text>
          </View>
          <View style={styles.containerft}>
            <Ionicons name="ios-home-outline" size={24} color="gray" />
            <Text style={styles.textft}>{superficie}</Text>
          </View>
        </View>
        <View style={styles.containerrent}>
          <Text style={styles.textrent}>{renta}</Text>
          <View style={styles.iconheart}>
            <Ionicons name="heart-circle" size={36} color="green" />
          </View>
        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#f1f2f1',
    borderRadius: 10,
    padding: 5,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    width: '90%'
  },

  containerimg: {
    // backgroundColor: 'red',

  },

  containerscore: {
    backgroundColor: '#ffffe0',
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100,
    flexDirection: 'row',
    borderRadius: 15,
  },

  containertext: {
    width: '70%',

  },

  image: {
    width: 120,
    height: 130,
  },

  textscore: {
    fontSize: 16,
    marginLeft: 5,
  },

  textname: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },

  containeradress: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 5,
  },

  textadress: {
    fontSize: 18,
    color: 'gray',
  },

  containerhouse: {
    flexDirection: 'row',
  },

  containerrooms: {
    flexDirection: 'row',
    flex: 0.8,
    marginStart: 10,
  },

  containerwc: {
    flexDirection: 'row',
    flex: 0.8
  },

  containerft: {
    flexDirection: 'row',
    flex: 1
  },

  containerrent: {
    flexDirection: 'row',
  },

  textrooms: {
    fontSize: 20,
    marginLeft: 10,
  },

  textwc: {
    fontSize: 20,
    marginLeft: 10,
  },

  textft: {
    fontSize: 20,
    marginLeft: 10,
  },

  textrent: {
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1,
    marginStart: 10,
  },

  iconheart: {
    flex: 0.2,
  }
})
export default ListItems