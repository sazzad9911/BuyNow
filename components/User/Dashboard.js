import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import Product from './../Cart/Product'
const Dashboard = (props) => {
    const product = props.route.params.product;
    const user = props.route.params.user;
    const [Laptop, setLaptop] = React.useState(null)
    const [Monitor, setMonitor] = React.useState(null)
    const [Mobile, setMobile] = React.useState(null)
    const [Camera, setCamera] = React.useState(null)
    const [Washing, setWashing] = React.useState(null)
    const [Ac, setAc] = React.useState(null)
    const [FAN, setFAN] = React.useState(null)
    const [Freeze, setFreeze] = React.useState(null)

    React.useEffect(() => {
        //console.log(user)
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
                            props.navigation.navigate('ProductPage', { name: 'Laptop', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/laptop.jpg')} />
                            <Text style={model.text}>Laptop</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Monitor', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/monitor.jpg')} />
                            <Text style={model.text}>Monitor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Mobile', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/monile.jpg')} />
                            <Text style={model.text}>Mobile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Camera', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/camera.jpg')} />
                            <Text style={model.text}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Washing Machine', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/images.png')} />
                            <Text style={[model.text, { marginBottom: 0 }]}>Washing</Text>
                            <Text style={[model.text, { marginTop: 0 }]}>Machine</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'AC', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/ac.png')} />
                            <Text style={model.text}>AC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'FAN', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/fan.png')} />
                            <Text style={model.text}>FAN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('ProductPage', { name: 'Freeze', user: user })
                        }} style={model.viewBox}>
                            <Image style={model.logo} source={require('./../Files/freez.jpg')} />
                            <Text style={model.text}>Freeze</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DropShadow>
            {
                Laptop && Laptop.length > 0 ? (
                    <ProductCart data={Laptop} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                Monitor && Monitor.length > 0 ? (
                    <ProductCart data={Monitor} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                Camera && Camera.length > 0 ? (
                    <ProductCart data={Camera} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                Mobile && Mobile.length > 0 ? (
                    <ProductCart data={Mobile} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                Washing && Washing.length > 0 ? (
                    <ProductCart data={Washing} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                Ac && Ac.length > 0 ? (
                    <ProductCart data={Ac} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                FAN && FAN.length > 0 ? (
                    <ProductCart data={FAN} user={user}/>
                ) :
                    (
                        <View></View>
                    )
            }
            {
                Freeze && Freeze.length > 0 ? (
                    <ProductCart data={Freeze} user={user}/>
                ):
                    (
                        <View></View>
    )
}
        </ScrollView>
    );
};

export default Dashboard;

const ProductCart = ({data,user}) => {

    return (
        <View>
            <Text style={{
                margin: 5,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: '800'
            }}>Freeze :</Text>
            <ScrollView horizontal={true}>
                {
                    data.map(d => (
                        <Product user={user} key={d.ProductId} data={d} />
                    ))
                }
            </ScrollView>
        </View>
    )
}