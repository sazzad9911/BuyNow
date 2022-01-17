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
import AdminHome from './AdminHome'
import UserHome from './UserHome'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const window = Dimensions.get('window');

const Home = (props) => {
    const [Admin, setAdmin] = React.useState(null);
    const [UserInformation, setUserInformation] = React.useState(null)
    const params = props.route.params
    const [visible, setVisible] = React.useState(true)

    const DrawerContent = ({ navigation }) => {
        return (
            <View style={model.drawer}>
                <Avatar.Image style={model.avatar} size={100} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} />
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
    const Header = ({ navigation }) => {
        const [searchQuery, setSearchQuery] = React.useState('');
        const [modal, setModal] = React.useState(true);
        const [data, setData] = React.useState([{ name: 'Camera', rate: '1000', id: '1' }, { name: 'Mobile', rate: '3000', id: '2' }])
        const [data2, setData2] = React.useState([]);
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
                    <Avatar.Image style={model.avatar} size={43} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} />
                </TouchableOpacity>
                <Searchbar style={{ width: window.width - 90, borderRadius: 40, height: 45 }}
                    placeholder="Search......"
                    onChangeText={(val) => {
                        setSearchQuery(val)
                        if (!val) {
                            setData2([])
                        }
                        if (val && data) {
                            const newData = data.filter(item => {
                                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                                const textData = val.toUpperCase();
                                return itemData.indexOf(textData) > -1;
                            });
                            setData2(newData)
                            console.log(newData)
                        }
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
                                data2.map((d, i) => (
                                    <SearchCart key={i} value={d} />
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>

            </View>
        )
    }
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="UserHome" component={UserHome} options={{
                header: (props) => <Header {...props} />
            }} />
            <Drawer.Screen name="AdminHome" component={AdminHome} options={{
                header: (props) => <Header {...props} />
            }} />
            <Drawer.Screen name="AdminDashboard" component={AdminDashboard} options={{
                header: (props) => <Header {...props} />
            }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Drawer.Navigator>

    );
};

export default Home;

