
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BottomTabs from './src/navigation/BottomTabs';
import MainStack from './src/navigation/index';


const App = () => {
  return (
    <View style={styles.container} >
      {/* <Text>YouTube Clone</Text> */}
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;