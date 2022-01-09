import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native'
import {TextInput,Button} from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow';
import model from './styles/model';

const Forget = () => {
    const [Email, setEmail]= React.useState();
    const [Note, setNote]= React.useState();
    return (
        <DropShadow style={model.shadow}>
            <ScrollView>
                <View style={model.view}>
                <Image style={model.logo} source={require('./Files/playstore.png')} />
                <TextInput style={model.input} value={Email} placeholder='Enter Email...' onChangeText={(val)=>{
                    setEmail(val)
                }}/>
                <Text style={model.text}>{Note}</Text>
                <Button style={model.button} mode='contained' onPress={()=>{
                    setNote('* we will send you an email')
                }}>Reset</Button>
                </View>
            </ScrollView>
        </DropShadow>
    );
};

export default Forget;