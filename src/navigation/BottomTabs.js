import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from "@expo/vector-icons";
import Shorts from '../screens/Shorts';
import AddVideo from '../screens/NewVideo';
import Subscription from '../screens/Subscription';
import You from '../screens/You';
import YouTubePlayer from '../screens/YouTubePlayer';

const Tab = createBottomTabNavigator();

function BottomTabs(props) {   
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={YouTubePlayer} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Shorts" component={Shorts} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="checkbox-multiple-blank-circle" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="AddVideo" component={AddVideo} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus-circle-outline" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Subscription" component={Subscription} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="youtube-subscription" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="You" component={You} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
}

export default BottomTabs;