import React from 'react';
import {View,Text,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import model from './../styles/model';

const About = () => {
    return (
        <View style={[model.view,{height: '96%', width: '96%',margin: '2%'}]}>
            <Image style={{
                width:120,
                height:120
            }} source={require('./../Files/playstore.png')}/>
            <Text style={{
                fontSize:25,
                fontWeight: '800',
                color:'#2980B9',
                marginBottom: 30,
            }}>Buy Now</Text>
            <View style={{flexDirection:'row',width:'60%',}}>
            <Ionicons name="md-call-outline" size={25} color="#2980B9" style={{margin:5}}/>
            <Text style={{
                color:'#2980B9',
                fontSize:18,
                marginLeft: 10,
            }}>+8801646881492</Text>
            </View>
            <View style={{flexDirection:'row',width:'60%',}}>
            <Ionicons name="mail-outline" size={25} color="#2980B9" style={{margin:5}}/>
            <Text style={{
                color:'#2980B9',
                fontSize:18,
                marginLeft: 10,
            }}>susanchakraborty.xpm@gmail.com</Text>
            </View>
            <View style={{flexDirection:'row',width:'60%',}}>
            <Ionicons name="locate-outline" size={25} color="#2980B9" style={{margin:5}}/>
            <Text style={{
                color:'#2980B9',
                fontSize:18,
                marginLeft: 10,
            }}>Lamabazar,Sylhet</Text>
            </View>
        </View>
    );
};
export default About;