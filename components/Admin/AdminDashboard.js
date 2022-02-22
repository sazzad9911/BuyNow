import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit'
import Product from '../Cart/Product';
import firestore from '@react-native-firebase/firestore'

const AdminDashboard = (props) => {
    const screenWidth = Dimensions.get("window").width;
    const product = props.route.params.product;
    const user= props.route.params.user;
    const [Laptop, setLaptop] = React.useState(null)
    const [Monitor, setMonitor] = React.useState(null)
    const [Mobile, setMobile] = React.useState(null)
    const [Camera, setCamera] = React.useState(null)
    const [Washing, setWashing] = React.useState(null)
    const [Ac, setAc] = React.useState(null)
    const [FAN, setFAN] = React.useState(null)
    const [Freeze, setFreeze] = React.useState(null)
    const [Orders, setOrders]= React.useState(null)

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
    const [Datasets, setDatasets]= React.useState(null)
    React.useEffect(() => {
        firestore().collection('Orders').onSnapshot(doc=> {
            if(doc){
                let arr=[]
                doc.forEach(d=> {
                    arr.push(d.data())
                    let laptop=0,monitor=0,mobile=0,camera=0,ac=0,fan=0,freeze=0;
                    d.get('ProductDetails').forEach(e=> {
                        if(e.ProductType==='camera') {
                            camera=camera+1
                        }else if(e.ProductType==='mobile') {
                            mobile=mobile+1
                        }else if(e.ProductType==='ac'){
                            ac=ac+1
                        }else if(e.ProductType==='fan'){
                            fan=fan+1
                        }else if(e.ProductType==='freeze'){
                            freeze=freeze+1
                        }else if(e.ProductType==='laptop'){
                            laptop=laptop+1
                        }else if(e.ProductType==='monitor'){
                            monitor=monitor+1
                        }
                    })
                    setDatasets({
                        camera:camera,
                        mobile:mobile,
                        ac: ac,
                        fan:fan,
                        freeze:freeze,
                        laptop: laptop,
                        monitor: monitor,
                    })
                })
                setOrders(arr)
            }else{
                setOrders([])
            }
        })
    },[])
    const data = {
        labels: ["Laptop", "Monitor", "Mobile", "Camera", "AC", "FAN", "Freeze"],
        datasets: [
            {
                data: [Datasets?Datasets.laptop:0, Datasets?Datasets.monitor:0, Datasets?Datasets.mobile:0, Datasets?Datasets.camera:0, Datasets?Datasets.ac:0, Datasets?Datasets.fan:0,Datasets?Datasets.freeze:0],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Products"] // optional
    };
    const chartConfig = {
        backgroundGradientFrom: "#2980B9",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#2980B9",
        backgroundGradientToOpacity: 0.9,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        propsForLabels: {
            stroke: '#ffff'
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffff"
        }
    };
    return (
        <ScrollView>
            <LineChart style={{ margin: 10, borderRadius: 20 }}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            <View>
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
                ) :
                (
                    <View></View>
                )
            }
            </View>
        </ScrollView>
    );
};

export default AdminDashboard;
const ProductCart=({data,user})=>{

    return(
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
                                    <Product user={user} key={d.ProductId} data={d}/>
                                ))
                            }
                        </ScrollView>
                    </View>
    )
}