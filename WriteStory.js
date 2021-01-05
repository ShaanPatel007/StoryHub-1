import * as React from 'react';
import { render } from 'react-dom';
import { TextInput , Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { isConstructorDeclaration } from 'typescript';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function WriteScreen() {

  constructor();{
    super(),
    this.setState = {
      text: "",
    }
  }

  render();{
  return (
 <View>  
<TextInput style={styles.input1}>
  onChangeText={text => { 
    this.setState({text: text}); 
    }} 
    value={this.state.text} 
 </TextInput>

  <TextInput 
  style={styles.input2}>
  onChangeText={text => { 
    this.setState({text: text}); 
    }} 
    multiline={true}
    numberOfLines={30}
    underlineColorAndroid='transparent'
    require={true}
    value={this.state.text} 
    </TextInput>

<TextInput
style={styles.input3}>
</TextInput>
    </View> 
  );
};
}

const styles = StyleSheet.create({
  input1: {
    alignText : 'center',
    alignItems : 'center'
  },
  input2: {
    alignItems : 'center',
    alignText : 'center'
  },
  input3: {
    alignText : 'center',
    alignItems : 'center'
  }
});

