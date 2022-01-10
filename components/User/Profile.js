import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native'
import model from '../styles/model';
import { TextInput ,Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Profile = () => {
    const [Name,setName] =React.useState('Md. Hossain');
    const [Email,setEmail] =React.useState('hosen@gmail.com');
    const [Phone,setPhone] =React.useState('0187628363');
    const [Address,setAddress] =React.useState('Ashulia,Saver,Dhaka');
    const [Images,setImages] =React.useState('');
    const [EditStatus,setEditStatus] =React.useState(true);
    return (
        <ScrollView style={{backgroundColor:'#ffff'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center',marginVertical:20 }}>
            <Text style={{
                fontSize:20,
                fontWeight: '800',
                fontFamily: '#2980B9',
                margin:10
            }}>Edit Profile</Text>
                <Image style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderColor: '#2980B9',
                    borderWidth: .5,
                }} source={require('./../Files/playstore.png')} />
            </View>
            <View style={model.viewBox}>
                <TextInput style={model.input} value={Name} placeholder="Name....." onChangeText={(value) =>{
                    setName(value);
                }} right={<TextInput.Icon name="account-edit-outline" onPress={()=>setEditStatus(false)}/>} 
                    left={<TextInput.Icon name="account-tie-outline"/>}
                />
                <TextInput style={model.input} value={Email} placeholder="Email....." onChangeText={(value) =>{
                    setEmail(value);
                }} right={<TextInput.Icon name="account-edit-outline" onPress={()=>setEditStatus(false)}/>} 
                    left={<TextInput.Icon name="email"/>}
                />
                <TextInput style={model.input} value={Phone} placeholder="Phone....." onChangeText={(value) =>{
                    setPhone(value);
                }} right={<TextInput.Icon name="account-edit-outline" onPress={()=>setEditStatus(false)}/>} 
                    left={<TextInput.Icon name="phone"/>}
                />
                <TextInput style={model.input} value={Address} placeholder="Address....." onChangeText={(value) =>{
                    setAddress(value);
                }} right={<TextInput.Icon name="account-edit-outline" onPress={()=>setEditStatus(false)}/>} 
                    left={<TextInput.Icon name="radiobox-marked"/>}
                />
            </View>
            <View style={model.viewBox}>
                <Button style={model.button} disabled={EditStatus} mode='contained'>Save</Button>
            </View>
            
        </ScrollView>
    );
};

export default Profile;