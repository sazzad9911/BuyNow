import React from 'react';
import { View, Text, ScrollView, Image, Alert, TouchableOpacity } from 'react-native'
import model from '../styles/model';
import { TextInput, Button } from 'react-native-paper';
import AnimatedLoader from 'react-native-animated-loader';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'

const Profile = (props) => {
    const user = props.route.params.user;
    const [Name, setName] = React.useState(user.Name);
    const [Email, setEmail] = React.useState(user.Email);
    const [Phone, setPhone] = React.useState(user.Phone);
    const [Address, setAddress] = React.useState(user.Address);
    const [Images, setImages] = React.useState(user.Photo);
    const [EditStatus, setEditStatus] = React.useState(true);
    const [visible, setVisible] = React.useState(false);

    return (
        <ScrollView style={{ backgroundColor: '#ffff' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '800',
                    fontFamily: '#2980B9',
                    margin: 10
                }}>Edit Profile</Text>
                <TouchableOpacity onPress={() =>{
                    launchImageLibrary({
                        mediaType:'photo',
                        quality:.5,
                    },response=>{
                        console.log(response.assets)
                        if(response.assets){
                            setImages(response.assets[0].uri)
                            storage().ref('profile/'+response.assets[0].fileName).putFile(response.assets[0].uri).then(() =>{
                                storage().ref('profile/'+response.assets[0].fileName).getDownloadURL(url=>{
                                    firestore().collection('UserInformation').doc(user.id).update({
                                        Photo:url,
                                    })
                                })
                            }).catch(error=>{
                                Alert.alert('Error',error.message)
                            })
                        }
                    })
                }}>
                    <Image style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        borderColor: '#2980B9',
                        borderWidth: .5,
                    }} source={{ uri:Images? Images: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' }} />
                </TouchableOpacity>
            </View>
            <View style={model.viewBox}>
                <TextInput style={model.input} value={Name} placeholder="Name....." onChangeText={(value) => {
                    setName(value);
                    setEditStatus(false)
                }} right={<TextInput.Icon name="account-edit-outline" onPress={() => setEditStatus(false)} />}
                    left={<TextInput.Icon name="account-tie-outline" />}
                />
                <TextInput style={model.input} value={Email} placeholder="Email....." onChangeText={(value) => {
                    setEmail(value);
                    setEditStatus(false)
                }} right={<TextInput.Icon name="account-edit-outline" onPress={() => setEditStatus(false)} />}
                    left={<TextInput.Icon name="email" />}
                />
                <TextInput style={model.input} value={Phone} placeholder="Phone....." onChangeText={(value) => {
                    setPhone(value);
                    setEditStatus(false)
                }} right={<TextInput.Icon name="account-edit-outline" onPress={() => setEditStatus(false)} />}
                    left={<TextInput.Icon name="phone" />}
                />
                <TextInput style={model.input} value={Address} placeholder="Address....." onChangeText={(value) => {
                    setAddress(value);
                    setEditStatus(false)
                }} right={<TextInput.Icon name="account-edit-outline" onPress={() => setEditStatus(false)} />}
                    left={<TextInput.Icon name="radiobox-marked" />}
                />
            </View>
            <View style={model.viewBox}>
                <Button style={model.button} disabled={EditStatus} mode='contained' onPress={() => {
                    if (Name && Phone && Email && Address) {
                        setVisible(true)
                        firestore().collection('UserInformation').doc(user.id).update({
                            Name: Name,
                            Email: Email,
                            Phone: Phone,
                            Address: Address
                        }).then(() => {
                            setVisible(false);
                            setEditStatus(true);
                        })
                    } else {
                        Alert.alert('Invalid', 'Inputs can not be empty')
                    }
                }}>Save</Button>
                <Button style={model.button} mode='contained' onPress={() => {
                    setVisible(true)
                    auth().signOut().then(() => {
                        setVisible(false);
                    })
                }}>Log Out</Button>
            </View>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("./../Files/66201-loader-balls.json")}
                animationStyle={model.lottie}
                speed={1}
            >
                <Text>Please wait...</Text>
            </AnimatedLoader>
        </ScrollView>
    );
};

export default Profile;