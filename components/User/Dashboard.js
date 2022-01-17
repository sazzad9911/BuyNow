import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import Product from './../Cart/Product'
const Dashboard = (props) => {
    const product = props.route.params.product;
    const [Laptop, setLaptop] = React.useState(null)
    const [Monitor, setMonitor] = React.useState(null)
    const [Mobile, setMobile] = React.useState(null)
    const [Camera, setCamera] = React.useState(null)
    const [Washing, setWashing] = React.useState(null)
    const [Ac, setAc] = React.useState(null)
    const [FAN, setFAN] = React.useState(null)
    const [Freeze, setFreeze] = React.useState(null)

    React.useEffect(() => {
        let mobile = [], camera = [], monitor = [], laptop = [], wash = [], ac = [], fan = [], freeze = [];
        if (product) {
            product.forEach(doc => {
                if (doc.ProductType === 'camera') {
                    camera.push(doc)
                } else if (doc.ProductType === 'mobile') {
                    mobile.push(doc)
                } else if (doc.ProductType === 'monitor') {
                    monitor.push(doc)
                } else if (doc.ProductType === 'laptop') {
                    laptop.push(doc)
                } else if (doc.ProductType === 'washing') {
                    wash.push(doc)
                } else if (doc.ProductType === 'AC') {
                    ac.push(doc)
                } else if (doc.ProductType === 'FAN') {
                    fan.push(doc)
                } else if (doc.ProductType === 'freeze') {
                    freeze.push(doc)
                }
            })
            setCamera(camera)
            setFreeze(freeze)
            setAc(ac)
            setMobile(mobile)
            setFAN(fan)
            setLaptop(laptop)
            setMonitor(monitor)
            setWashing(wash)
        }
    }, [])
    return (
        <ScrollView>
            <DropShadow style={model.shadow}>
                <View style={model.viewBox}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Laptop' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/laptop.jpg')} />
                            <Text style={model.text}>Laptop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Monitor' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/monitor.jpg')} />
                            <Text style={model.text}>Monitor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Mobile' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/monile.jpg')} />
                            <Text style={model.text}>Mobile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Camera' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/camera.jpg')} />
                            <Text style={model.text}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Washing Machine' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/images.png')} />
                            <Text style={[model.text, { marginBottom: 0 }]}>Washing</Text>
                            <Text style={[model.text, { marginTop: 0 }]}>Machine</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'AC' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/ac.png')} />
                            <Text style={model.text}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'FAN' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/fan.png')} />
                            <Text style={model.text}>FAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Freeze' })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/freez.jpg')} />
                            <Text style={model.text}>Freeze</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DropShadow>
            {
                Laptop && Laptop.length > 0 ? (
                    <View>
                        <Text style={{
                            margin: 5,
                            marginLeft: 10,
                            fontSize: 16,
                            fontWeight: '800'
                        }}>Laptop :</Text>
                        <ScrollView horizontal={true}>
                            {
                                Laptop.map(d => (
                                    <Product key={d.id} />
                                ))
                            }
                        </ScrollView>
                    </View>
                ) : Mobile && Mobile.length > 0 ? (
                    <View>
                        <Text style={{
                            margin: 5,
                            marginLeft: 10,
                            fontSize: 16,
                            fontWeight: '800'
                        }}>Mobile :</Text>
                        <ScrollView horizontal={true}>
                            {
                                Mobile.map(d => (
                                    <Product key={d.id} />
                                ))
                            }
                        </ScrollView>
                    </View>
                ) : Camera && Camera.length > 0 ? (
                    <View>
                        <Text style={{
                            margin: 5,
                            marginLeft: 10,
                            fontSize: 16,
                            fontWeight: '800'
                        }}>Camera :</Text>
                        <ScrollView horizontal={true}>
                            {
                                Camera.map(d => (
                                    <Product key={d.id} />
                                ))
                            }
                        </ScrollView>
                    </View>
                ) : (
                    <View></View>
                )
            }
        </ScrollView>
    );
};

export default Dashboard;