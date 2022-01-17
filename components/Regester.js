import React from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import DropShadow from 'react-native-drop-shadow';
import model from './styles/model';
import { TextInput, Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AnimatedLoader from 'react-native-animated-loader'

const Regester = (props) => {
    const [Email, setEmail] = React.useState();
    const [Password, setPassword] = React.useState();
    const [Phone, setPhone] = React.useState();
    const [Address, setAddress] = React.useState();
    const [Name, setName] = React.useState();
    const navigation = props.navigation;
    const [visible, setVisible] = React.useState(false);



    return (
        <DropShadow style={model.shadow}>
            <ScrollView>
                <View style={model.view}>
                    <Image style={model.logo} source={require('./Files/playstore.png')} />
                    <TextInput style={model.input} value={Name} placeholder='Enter Name...' onChangeText={(val) => {
                        setName(val)
                    }} />
                    <TextInput style={model.input} value={Email} placeholder='Enter Email...' onChangeText={(val) => {
                        setEmail(val)
                    }} />
                    <TextInput style={model.input} value={Phone} placeholder='Enter Phone...' onChangeText={(val) => {
                        setPhone(val)
                    }} />
                    <TextInput style={model.input} value={Address} placeholder='Enter Address...' onChangeText={(val) => {
                        setAddress(val)
                    }} />
                    <TextInput style={model.input} value={Password} placeholder='Enter Password...' secureTextEntry onChangeText={(val) => {
                        setPassword(val)
                    }} />
                    <Button style={model.button} mode='contained' onPress={() => {
                        if (Name && Email && Phone && Address && Password) {
                            setVisible(true)
                            auth()
                                .createUserWithEmailAndPassword(Email, Password)
                                .then(() => {
                                    auth().onAuthStateChanged(user => {
                                        firestore().collection('UserInformation').doc(user.uid).set({
                                            id: user.uid,
                                            Name: Name,
                                            Phone: Phone,
                                            Email: Email,
                                            Address: Address,
                                            MyCart: [],
                                            Admin: false
                                        }).then(() => {
                                            setVisible(false);
                                            navigation.navigate('Homes', { uid: user.uid })
                                        }).catch(err => {
                                            setVisible(false);
                                        })
                                    })
                                })
                                .catch(error => {
                                    if (error.code === 'auth/email-already-in-use') {
                                        Alert.alert('Error', 'That email address is already in use!')
                                    }

                                    if (error.code === 'auth/invalid-email') {
                                        Alert.alert('Error', 'That email address is invalid!')
                                    }

                                    Alert.alert(error.code, error.message)
                                    setVisible(false);
                                });
                        } else {
                            Alert.alert('Invalid', 'Please fill all the fields')
                        }
                    }}>Register</Button>
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

export default Regester;