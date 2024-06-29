import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import MainScreen from './src/Screens/MainScreen';
import MessageNotification from './src/Components/Message/MessageNotification';
import Survey from './src/Components/Survey/Survey';
import Invoice from './src/Components/Invoice/Invoice';
import ChatPage from './src/Components/Message/ChatPage';
import SurveyAnalysis from './src/Components/Survey/SurveyAnalysis';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,animation:'slide_from_right'}} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="MessageNotification" component={MessageNotification} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="SurveyAnalysis" component={SurveyAnalysis} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
