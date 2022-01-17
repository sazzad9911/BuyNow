import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import Login from './components/LogIn'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regester from './components/Regester';
import Forget from './components/Forget';
import Home from './components/Home';
import ProductPage from './components/ProductPage'
//import 'react-native-gesture-handler';
import AnimatedLoader from "react-native-animated-loader";
import model from './components/styles/model';

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
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Regester} options={{ headerShown: false }} />
          <Stack.Screen name="Forget" component={Forget} options={{ headerShown: false }} />
          <Stack.Screen name="Homes" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ProductPage" component={ProductPage} options={{ headerShown: false }}
            initialParams={{ name: 'ProductPage' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <AnimatedLoader
        visible={false}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./components/Files/66201-loader-balls.json")}
        animationStyle={model.lottie}
        speed={1}
      >
        <Text>Loading...</Text>
      </AnimatedLoader>
    </PaperProvider>
  );
};

export default App;