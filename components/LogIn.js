import React from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity} from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import DropShadow from "react-native-drop-shadow";
import model from './styles/model'

const LogIn = (props) => {
    const [Email, setEmail] = React.useState();
    const [Password, setPassword] = React.useState();
    const navigation = props.navigation;
    return (
        <DropShadow style={model.shadow}>
            <ScrollView>
            <View style={model.view}>
                <Image style={model.logo} source={require('./Files/playstore.png')} />
                <TextInput style={model.input} value={Email} placeholder='Enter Email........'
                    onChangeText={val => setEmail(val)} />
                <TextInput style={model.input} value={Password} secureTextEntry placeholder='Enter Password.......'
                    onChangeText={val => setPassword(val)} />
                <Button style={model.button} mode='contained' onPress={()=>{
                    navigation.navigate('Homes')
                }}>Log In</Button>
                <TouchableOpacity style={model.button} onPress={()=>{
                    navigation.navigate('Register')
                }}>
                    <Text style={model.text}>Register?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[model.button,{marginTop:0}]} onPress={()=>{
                    navigation.navigate('Forget')
                }}>
                    <Text style={model.text}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </DropShadow>
    );
};

export default LogIn;