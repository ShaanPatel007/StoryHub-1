import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ReadScreen({
  render = () => {
  return (
    <View>
<Text>
  Read the story
</Text>
    </View>
  );
}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
