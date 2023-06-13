
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Shorts = () => {
  return (
    <View style={styles.container} >
        <Text>
            Shorts Screen
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Shorts;
