import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screen/SettingsScreen';
import SettingsScreen from '../screen/SettingsScreen';


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Settings',
  screenOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'tomato',
    },
    headerTitle:"Settings"
  },
  screens: {
    Settings: SettingsScreen,
  },
});


const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;