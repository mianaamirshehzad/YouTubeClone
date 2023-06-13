
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const AddVideo = () => {
  return (
    <View style={styles.container} >
      <Text>
        AddVideo Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default AddVideo;
