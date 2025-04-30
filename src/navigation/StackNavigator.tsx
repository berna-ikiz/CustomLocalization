import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screen/SettingsScreen';
import SettingsScreen from '../screen/SettingsScreen';


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Settings',
  screenOptions: {
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color:'#445d7a'
    },
  },
  screens: {
    Settings: SettingsScreen,
  },
});


const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;