import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ListItems = ({ item }) => {

    const {nombre, direccion, habitaciones, baños, superficie, renta, evaluacion, icono, id} = item

  return (
    <View style = { styles.container }>
        <View style = {styles.containerimg}>
            <Image source = {{ uri:'https://photoshop-kopona.com/uploads/posts/2018-09/1537562905_88.jpg'}}
            style = {styles.image}/>
        </View>
              <View style = {styles.containertext}>
                  <Text style = {styles.textname}>{nombre}</Text>
                  <Text style = {styles.textadress}>{direccion}</Text>
                  <Text style = {styles.textrooms}>{habitaciones}</Text>
                  <Text style = {styles.textwc}>{baños }</Text>
                  <Text style = {styles.textft}>{superficie}</Text>
                  <Text style = {styles.textrent}>{renta}</Text>
                  <Text style = {styles.textscore}>{evaluacion}</Text>
              </View>
    </View>
  )
}   

    const styles = StyleSheet.create({

        container: {
          backgroundColor: '#f1f2f1',
          padding: 10,
          marginBottom: 10,
          display:"flex", 
          flexDirection:"row",
          justifyContent: "center",
          alignItems:"center",
          alignSelf: 'center',
          width: '90%'
        },

        containerimg: {
          backgroundColor: 'red',

        },

        containertext: {
          backgroundColor: 'blue',
        },

        image: {
          width: 100,
          height: 100,
        },

        textname: {
          fontSize: 18,
        },

        textadress: {
          fontSize: 18,
        },

        textrooms: {
          fontSize: 18,
          
        },

        textwc: {
          fontSize: 18,
        },

        textft: {
          fontSize: 18,

        },

        textrent: {
          fontSize: 18,

        },

        textscore: {
          fontSize: 18,

        },
            
    })
export default ListItems