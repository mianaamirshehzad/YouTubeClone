
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const You = () => {
  return (
    <View style={styles.container} >
      <Text>
        You Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default You;
