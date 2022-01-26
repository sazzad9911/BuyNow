import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import OrderCart from '../Cart/OrderCart';
import firestore from '@react-native-firebase/firestore'
import model from './../styles/model'
import AnimatedLoader from 'react-native-animated-loader'

const OrderList = () => {
    const [Orders, setOrders] = React.useState(null)

    firestore().collection('Orders').orderBy('NewDate', 'desc').onSnapshot(doc => {
        if (doc) {
            let arr = []
            doc.forEach(d => {
                arr.push(d.data())
            })
            setOrders(arr)
        } else {
            setOrders([])
        }
    })
    const accept=(doc)=> {
        firestore().collection('Orders').doc(doc.OrderId).update({
            Read:true,
        })
        firestore().collection('Notification').add({
            NewDate: new Date(),
            Message:'Your order request has been accepted.',
            uid:doc.UserDetails.id,
        })
    }
    const decline=(doc)=> {
        firestore().collection('Orders').doc(doc.OrderId).update({
            Read:true,
        })
        firestore().collection('Notification').add({
            NewDate: new Date(),
            Message:'Your order request has been rejected.',
            uid:doc.UserDetails.id,
        })
    }
    return (
        <ScrollView>
            {
                Orders ? (
                    Orders.length > 0 ? (
                        Orders.map((doc, i) => (
                            <OrderCart key={i} data={doc} accept={(doc)=>accept(doc)} decline={(doc)=>decline(doc)}/>
                        ))
                    ) : (
                        <Text style={{
                            margin: 10,
                            textAlign: 'center',
                        }}>Empty</Text>
                    )
                ) : ( 
                    <AnimatedLoader
                        visible={true}
                        overlayColor="rgba(255,255,255,0.75)"
                        source={require("./../Files/66201-loader-balls.json")}
                        animationStyle={model.lottie}
                        speed={1}
                    >
                        <Text>Please wait...</Text>
                    </AnimatedLoader>
                )
            }
        </ScrollView>
    );
};
export default OrderList;