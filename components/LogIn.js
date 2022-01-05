import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import DropShadow from "react-native-drop-shadow";
import model from './styles/model'

const LogIn = () => {
    const [Email,setEmail] =React.useState();
    const [Password,setPassword] =React.useState();
    return (
        <DropShadow style={{
            shadowColor:'#000',
            shadowOffset:{
                width: 2,
                height: 2
            },
            shadowOpacity: .5,
            shadowRadius:3
        }}>
            <View style={model.view}>
            <Image style={model.logo} source={require('./Files/playstore.png')}/>
            <TextInput style={model.input} value={Email} placeholder='Enter Email........' 
            onChangeText={val=>setEmail(val)}/>
            <TextInput style={model.input} value={Password} placeholder='Enter Password.......' 
            onChangeText={val=>setPassword(val)}/>
            <Button style={model.button} mode='contained'>Log In</Button>
            </View>
        </DropShadow>
    );
};

export default LogIn;