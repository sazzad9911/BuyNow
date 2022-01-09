import React from 'react';
import {View,Text,ScrollView,Image} from 'react-native'
import DropShadow from 'react-native-drop-shadow';
import model from './styles/model';
import {TextInput,Button} from 'react-native-paper'

const Regester = () => {
    const [Email,setEmail]= React.useState();
    const [Password, setPassword]= React.useState();
    const [Phone, setPhone]= React.useState();
    const [Address, setAddress]= React.useState();
    const [Name, setName]= React.useState();
    return (
        <DropShadow style={model.shadow}>
            <ScrollView>
                <View style={model.view}>
                <Image style={model.logo} source={require('./Files/playstore.png')} />
                <TextInput style={model.input} value={Name} placeholder='Enter Name...' onChangeText={(val)=>{
                    setName(val)
                }}/>
                <TextInput style={model.input} value={Email} placeholder='Enter Email...' onChangeText={(val)=>{
                    setEmail(val)
                }}/>
                <TextInput style={model.input} value={Phone} placeholder='Enter Phone...' onChangeText={(val)=>{
                    setPhone(val)
                }}/>
                <TextInput style={model.input} value={Address} placeholder='Enter Address...' onChangeText={(val)=>{
                    setAddress(val)
                }}/>
                <TextInput style={model.input} value={Password} placeholder='Enter Password...' secureTextEntry onChangeText={(val)=>{
                    setPassword(val)
                }}/>
                <Button style={model.button} mode='contained'>Register</Button>
                </View>
            </ScrollView>
        </DropShadow>
    );
};

export default Regester;