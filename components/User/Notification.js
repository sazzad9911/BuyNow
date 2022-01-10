import React from 'react';
import {View,Text} from 'react-native'; 
import DropShadow from 'react-native-drop-shadow'
import model from './../styles/model';
const Notification = () => {
    return (
        <View>
           <Message message="This is a test message"/>
        </View>
    );
};
export default Notification;

const Message=(props)=>{
    return (
        <DropShadow style={model.shadow}>
        <View style={{
            backgroundColor:'#ffff',
            borderRadius:10,
            minHeight:50,
            margin:5,
            padding:5,
            justifyContent: 'center'
        }}>
            <Text style={{fontSize:17}}>{props.message}</Text>
        </View>
        </DropShadow>
    )
}