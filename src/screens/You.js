import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const You = (props) => {
  console.log("props in you screen");
  return (
    <View style={styles.container} >
      <Text style={styles.title} >
        Google Profile
      </Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1d1e',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ff8000',
    padding: 10,
  },
});

export default You;