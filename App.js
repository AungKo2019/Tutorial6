import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [people,setPeople]=useState([
    { name:'a',key:'1'},
    { name:'b',key:'2'},
    { name:'c',key:'3'},
    { name:'d',key:'4'},
    { name:'e',key:'5'},
    { name:'f',key:'6'},
    { name:'g',key:'7'},
    { name:'h',key:'8'},
    { name:'i',key:'9'},
    { name:'j',key:'10'},
  ]);

  return (
    <View style={styles.container}>
       <ScrollView>
          { people.map(item=>(
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          ))}
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    fontSize:24,
    backgroundColor:'pink',
    padding:30,
    marginTop:24,
  },
});
