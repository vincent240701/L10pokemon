import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const datasource = [
  {
    data: [
      {name: 'Charmander', card: '4'},
      {name: 'Charmeleon', card: '5'},
      {name: 'Vulpix', card: '37'},
    ],
    title: "Fire",
    icon: "fire",
    bgcolor: "red",
    textcolor: "white",
  },
  {
    data: [
      {name: 'Squirtle', card: '7'},
      {name: 'Wartortle', card: '8'},
      {name: 'Psyduck', card: '54'},
    ],
    title: "Water",
    icon: "droplet",
    bgcolor: "blue",
    textcolor: "white",
  },
  {
    data: [
      {name: 'Pikachu', card: '25'},
      {name: 'Raichu', card: '26'},
    ],
    title: "Lightning",
    icon: "bolt",
    bgcolor: "yellow",
    textcolor: "black",
  },
  {
    data: [
      {name: 'Bulbasaur', card: '1'},
      {name: 'Ivysaur', card: '2'},
    ],
    title: "Grass",
    icon: "leaf",
    bgcolor: "green",
    textcolor: "white",
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}
                        onPress={() => Alert.alert(item.name + " is selected!")}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.card + '-2x.png'}}
               style={styles.imageStyle}/>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Button title="Add Pokemon" onPress={() => {}}/>
        <SectionList sections={datasource} renderItem={renderItem}
                     contentContainerStyle={{padding: 10}}
                     renderSectionHeader={({section: {title, icon, bgcolor, textcolor}}) => (
                         <View style={[styles.headerStyle, {backgroundColor: bgcolor}]}>
                           <FontAwesome6 name={icon} size={20} color={textcolor}/>
                           <Text style={[styles.headerText, {color: textcolor}]}>{title}</Text>
                         </View>
                     )}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 20,
  },
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 150,
    height: 210,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});