import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import model from './styles/model';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './User/Dashboard';
import Profile from './User/Profile';
import MyCart from './User/MyCart';
import Notification from './User/Notification';
import About from './User/About';
import SearchCart from './Cart/SearchCart'
import AdminDashboard from './Admin/AdminDashboard'
import OrderList from './Admin/OrderList'
import { Avatar, Searchbar } from 'react-native-paper';
import AddProduct from './Admin/AddProduct';
import ProductList from './Admin/ProductList';
import AnimatedLoader from 'react-native-animated-loader'
import firestore from '@react-native-firebase/firestore'

const AdminHome = (props) => {
    const Tab = createBottomTabNavigator();
    const navigation = props.navigation;
    const product=props.route.params.product;
    const user = props.route.params.user;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Dashboard') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Add Product') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Order List') {
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
            <Tab.Screen name="Dashboard" component={AdminDashboard} options={{ headerShown: false }} initialParams={{
                user:user ,product:product
            }}/>
            <Tab.Screen name="Add Product" component={AddProduct} options={{ headerShown: false }} />
            <Tab.Screen name="Order List" component={OrderList} options={{ headerShown: false }} />
            <Tab.Screen name="Product List" component={ProductList} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
export default AdminHome