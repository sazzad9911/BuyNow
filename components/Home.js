import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native';
import model from './styles/model';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './User/Dashboard';
import Profile from './User/Profile';
import MyCart from './User/MyCart';
import Notification from './User/Notification';
import About from './User/About';
import Product from './Cart/Product'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const window = Dimensions.get('window');

const Home = () => {

    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="TabNavigation" component={TabNavigation} options={{
                header: (props) => <Header {...props} />
            }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};

export default Home;
const TabNavigation = () => {
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
            <Tab.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
            <Tab.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

import { Avatar, Searchbar } from 'react-native-paper';
const DrawerContent = ({ navigation }) => {
    return (
        <View style={model.drawer}>
            <Avatar.Image style={model.avatar} size={100} source={require('./Files/playstore.png')} />
            <View>
                <Text style={{
                    fontSize: 18,
                    color: '#2980B9',
                    marginBottom: 5
                }}>-Md. Sazzad Hossain</Text>
                <Text style={{
                    fontSize: 15,
                }}>-mksa.sazzad@gmail.com</Text>
                <Text>-01761143991</Text>
                <Text>-Ashulia Model Town, Ashulia, Saver, Dhaka</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#2980B9',
                borderRadius: 10,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                flexDirection: 'row'
            }} onPress={() => {
                navigation.navigate('Profile')
            }}>
                <Ionicons name='create-outline' size={25} color='#ffff' />
                <Text style={{
                    marginLeft: 5,
                    color: '#ffff'
                }}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    )
}
import DropShadow from 'react-native-drop-shadow';
import Seacrch from './User/Seacrch';
const Header = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [modal, setModal] = React.useState(true);
    const [data,setData] = React.useState([{name:'Camera',rate:'1000',id:'1'},{name:'Mobile',rate:'3000',id:'2'}])
    const [data2,setData2] = React.useState([]);
    return (
        <View style={{
            flexDirection: 'row',
            margin: 2,
            backgroundColor: '#ffff',
            padding: 2,
            paddingBottom: 5
        }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{
                backgroundColor: '#ffff',
                width: 45,
                height: 45,
                borderRadius: 22.5,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
                borderWidth: 1,
                borderColor: '#2980B9'
            }}>
                <Avatar.Image style={model.avatar} size={43} source={require('./Files/playstore.png')} />
            </TouchableOpacity>
            <Searchbar style={{ width: window.width - 90, borderRadius: 40, height: 45 }}
                placeholder="Search......"
                onChangeText={(val) => {
                    setSearchQuery(val)
                    data.forEach((item) => {
                        if(item.name==val) {
                            setData2([item])
                        }
                    })
                }}
                value={searchQuery}
            />
            <View style={{
                width: window.width,
                backgroundColor: '#ffff',
                position: 'absolute',
                top: 50,
                left: 0
            }}>
                <ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                    {
                        data2.map((i,d)=>(
                            <Product key={d.id}/>
                        ))
                    }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}