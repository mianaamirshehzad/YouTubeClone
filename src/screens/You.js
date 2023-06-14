import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomImage from '../components/CustomImage';

const You = (props) => {
  console.log("Props from previous Screen => " + JSON.stringify(props));
  const { email, name, photo } = props.route.params.userProfile.user;


  useEffect(() => {
    console.log("You => ");
  }, [])
  return (
    <View style={styles.container} >
      <Text style={styles.title} >
        Google Profile
      </Text>
      <View style={styles.midContainer} >
        <Text style={{ color: 'white' }} > Email of </Text>
        <Text style={{ color: '#ff8000' }}> {name} </Text>
        <Text style={{ color: 'white' }}> is </Text>
        <Text style={{ color: '#ff8000' }}> {email} </Text>
      </View>
      {/* <CustomImage source = {require('photo')} /> */}
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
  midContainer: {
    backgroundColor: '#2d2d2d',
    height: '20%',
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
    // transform: [{ rotateY: '45deg' }]
  },
});

export default You;