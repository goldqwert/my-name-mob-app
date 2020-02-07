import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default App = () => {

  const [value, setValue] = useState('')

  const name = (value.indexOf('Коленьков Юрий')) !== -1 ? {color: 'green'} :
  (value.length > 0 && value.indexOf('Коленьков Юрий')) ? {color: 'red'} : {color: 'black'}

  return (
    <View style={s.container}>
      <Text style={name}>Коленьков Юрий</Text>
      <TextInput style={s.inputName} maxLength={14} onChangeText={(text) => setValue(text)}/>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputName: {
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderRadius: 50,
    borderWidth: 1,
    padding: 10
  }
});
