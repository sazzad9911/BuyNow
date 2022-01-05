import React from 'react';
import { SafeAreaView } from 'react-native';
import Login from './components/LogIn'
import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498DB',
      accent: '#3498DB',
      backgroundColor: '#ffff',
      text:'#ffff'
    },
  };
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ backgroundColor: '#ffff' }}>
        <Login />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;