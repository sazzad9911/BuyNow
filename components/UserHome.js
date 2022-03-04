
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import model from './styles/model';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './User/Dashboard';
import MyCart from './User/MyCart';
import Notification from './User/Notification';
import About from './User/About';

const UserHome = (props) => {
    const Tab = createBottomTabNavigator();
    const navigation = props.navigation;
    //navigation.navigate('AdminHome')
    //console.log(props.route.params)
    const user=props.route.params.user;
    //console.log(user)
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'MyCart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Notification') {
                        iconName = focused ? 'notifications' : 'notifications-circle'
                    } else {
                        iconName = focused ? 'information-circle-sharp' : 'information-circle-outline'
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2980B9',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Dashboard} options={{ headerShown: false }} 
                initialParams={{product:props.route.params.product, user:user}}
            />
            <Tab.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} initialParams={{
                user:user}}/>
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} initialParams={{
                user:user}}/>
            <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
export default UserHome