import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import DropShadow from "react-native-drop-shadow";
import model from './styles/model'
import auth from '@react-native-firebase/auth'
import SplashScreen from 'react-native-splash-screen'
import AnimatedLoader from 'react-native-animated-loader';

const LogIn = (props) => {
    const [Email, setEmail] = React.useState();
    const [Password, setPassword] = React.useState();
    const [User, setUser] = React.useState(null);
    const navigation = props.navigation;
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                navigation.navigate('Homes',{uid:user.uid})
                //SplashScreen.hide();
            }else{
                navigation.navigate('LogIn')
            }
        })
        SplashScreen.hide();
    },[])
    return (
        <DropShadow style={model.shadow}>
            <ScrollView>
                <View style={model.view}>
                    <Image style={model.logo} source={require('./Files/playstore.png')} />
                    <TextInput style={model.input} value={Email} placeholder='Enter Email........'
                        onChangeText={val => setEmail(val)} />
                    <TextInput style={model.input} value={Password} secureTextEntry placeholder='Enter Password.......'
                        onChangeText={val => setPassword(val)} />
                    <Button style={model.button} mode='contained' onPress={() => {
                        //navigation.navigate('Homes')
                        if (Email && Password) {
                            setVisible(true);
                            auth().signInWithEmailAndPassword(Email, Password).then(() => {
                                setVisible(false);
                                //navigation.navigate('Homes')
                            }).catch(err => {
                                Alert.alert('Error', err.message)
                                setVisible(false);
                            })
                        }

                    }}>Log In</Button>
                    <TouchableOpacity style={model.button} onPress={() => {
                        navigation.navigate('Register')
                    }}>
                        <Text style={model.text}>Register?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[model.button, { marginTop: 0 }]} onPress={() => {
                        navigation.navigate('Forget')
                    }}>
                        <Text style={model.text}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("./Files/66201-loader-balls.json")}
                animationStyle={model.lottie}
                speed={1}
            >
                <Text>Please wait...</Text>
            </AnimatedLoader>
        </DropShadow>
    );
};

export default LogIn;