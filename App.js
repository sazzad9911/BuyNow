import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './components/LogIn'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regester from './components/Regester';
import Forget from './components/Forget';
import Home from './components/Home';
//import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498DB',
      accent: '#3498DB',
      backgroundColor: '#ffff',
    },
  };
  SplashScreen.hide();
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Regester} options={{headerShown:false}}/>
          <Stack.Screen name="Forget" component={Forget} options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;