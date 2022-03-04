import React from 'react';
import { View, Text, ScrollView,Alert,DevSettings } from 'react-native'
import { Button } from 'react-native-paper';
import ProductCart from './../Cart/ProductCart'
import model from './../styles/model';
import firestore from '@react-native-firebase/firestore'
import uuid from 'react-native-uuid'
import AnimatedLoader from 'react-native-animated-loader'
const MyCart = (props) => {
    const user = props.route.params.user;
    const [Cart, setCart] = React.useState(user.MyCart)
    const [Orders, setOrders] = React.useState([])
    const [visible, setVisible]= React.useState(false)
    let check = []
    const deleteCart = (position) => {
        let arr = []
        Cart.forEach((doc, i) => {
            if (i == position) {

            } else {
                arr.push(doc)
            }
        })
        setCart(arr)
        firestore().collection('UserInformation').doc(user.id).update({
            MyCart: Cart,
        })
    }
    const selectCart = (data) => {

        Cart.forEach((doc, i) => {
            if (doc.ProductId == data.ProductId) {
                setOrders([...Orders, doc])
            }
        })

    }
    const unselectCart = (data) => {
        let arr = []
        Orders.forEach((doc, i) => {
            if (doc.ProductId == data.ProductId) {

            } else {
                arr.push(doc)
            }
        })
        setOrders(arr)

    }
    const updateCart=()=>{
        let arr=[]
        for(var i=0; i<Cart.length; i++) {
            for(var j=0; j<Orders.length; j++) {
                if(Orders[j].ProductId!=Cart[i].ProductId){
                    arr.push(Cart[i])
                }
            }
        }
        setCart(arr)
        setVisible(true)
        firestore().collection('UserInformation').doc(user.id).update({
            MyCart:arr,
        }).then(() => {
            setVisible(false);
            Alert.alert("Successful",'Order Completed successful');
        }).catch(err => {
            setVisible(false);
        })
    }

    return (
        <ScrollView>
            {
                Cart.map((doc, i) => (
                    <ProductCart key={i} id={i} delete={(k) => deleteCart(k)} data={doc}
                        select={(n) => selectCart(n)} unselect={(n) => unselectCart(n)}
                    />
                ))
            }
            <View style={model.viewBox}>
                <Button style={model.button} mode='contained' onPress={() => {
                    if(Orders.length <=0) {
                        Alert.alert("Opps",'Please select an item')
                        return
                    }
                    setVisible(true)
                    const id = uuid.v4();
                    firestore().collection('Orders').doc(id).set({
                        OrderId: id,
                        ProductDetails: Orders,
                        UserDetails: user,
                        NewDate: new Date(),
                        Read: false,
                    }).then(() => {
                        setVisible(false);
                        updateCart();
                        //DevSettings.reload()
                    }).catch(err => {
                        setVisible(false);
                        Alert.alert("Error", err.message)
                    })

                }}>Order Now</Button>
            </View>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("./../Files/66201-loader-balls.json")}
                animationStyle={model.lottie}
                speed={1}
            >
                <Text>Placing orders...</Text>
            </AnimatedLoader>
        </ScrollView>
    );
};
export default MyCart; 