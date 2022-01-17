import React from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow';
import model from './styles/model';
import auth from '@react-native-firebase/auth'
import AnimatedLoader from 'react-native-animated-loader'

const Forget = () => {
    const [Email, setEmail] = React.useState();
    const [Note, setNote] = React.useState();
    const [visible, setVisible] = React.useState(false);

    return (
        <DropShadow style={model.shadow}>
            <ScrollView>
                <View style={model.view}>
                    <Image style={model.logo} source={require('./Files/playstore.png')} />
                    <TextInput style={model.input} value={Email} placeholder='Enter Email...' onChangeText={(val) => {
                        setEmail(val)
                    }} />
                    <Text style={model.text}>{Note}</Text>
                    <Button style={model.button} mode='contained' onPress={() => {
                        //setNote('* we will send you an email')
                        if (Email) {
                            setVisible(true)
                            auth().sendPasswordResetEmail(Email).then(() => {
                                Alert.alert("Success", 'Please check your email. A email has send to you');
                                setVisible(false);
                            }).catch(err => {
                                Alert.alert("Error", err.message);
                                setVisible(false);
                            })
                        } else {
                            setNote('* wrong input here');
                        }
                    }}>Reset</Button>
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

export default Forget;