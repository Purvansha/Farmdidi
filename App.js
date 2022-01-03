import React from 'react';
import { View, Text, Image, } from 'react-native';


const App = () => {
  return (
    <View style={{flex:1}}>
      <View style={{ backgroundColor: '#ffb84d', alignItems: 'center', justifyContent: 'center' }}  >
        <Text style={{ fontSize: 30 }}>We deliver Pan India</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./hero-image.png')} width="200" height="200" style={{width:150,height:150}} />
      </View>
    </View>
  )
};

export default App
