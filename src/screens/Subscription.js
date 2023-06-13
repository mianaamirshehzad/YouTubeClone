
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Subscription = () => {
  return (
    <View style={styles.container} >
        <Text>
            Subscription Screen
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Subscription;
