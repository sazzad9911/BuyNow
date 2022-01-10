import React from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity,Modal } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import Product from './../Cart/Product'
const Dashboard = (props) => {
    return (
        <ScrollView>
            <DropShadow style={model.shadow}>
                <View style={model.viewBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'Laptop'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/laptop.jpg')} />
                            <Text style={model.text}>Laptop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'Monitor'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/monitor.jpg')} />
                            <Text style={model.text}>Monitor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'Mobile'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/monile.jpg')} />
                            <Text style={model.text}>Mobile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'Camera'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/camera.jpg')} />
                            <Text style={model.text}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'Washing Machine'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/images.png')} />
                            <Text style={[model.text, { marginBottom: 0 }]}>Washing</Text>
                            <Text style={[model.text, { marginTop: 0 }]}>Machine</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'AC'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/ac.png')} />
                            <Text style={model.text}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'FAN'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/fan.png')} />
                            <Text style={model.text}>FAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                            props.navigation.navigate('ProductPage',{name:'Freeze'})
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/freez.jpg')} />
                            <Text style={model.text}>Freeze</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DropShadow>
            <Text style={{
                margin: 5,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: '800'
            }}>Laptop :</Text>
            <ScrollView horizontal={true}>
                <Product />
                <Product />
                <Product />
                <Product />
            </ScrollView>
            <Text style={{
                margin: 5,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: '800'
            }}>Laptop :</Text>
            <ScrollView horizontal={true}>
                <Product />
                <Product />
                <Product />
                <Product />
            </ScrollView>

        </ScrollView>
    );
};

export default Dashboard;