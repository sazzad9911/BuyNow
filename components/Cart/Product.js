import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import firestore from '@react-native-firebase/firestore';
import AnimatedLoader from 'react-native-animated-loader'

const Product = (props) => {
    const data = props.data;
    const user = props.user;
    const [visible, setVisible] = React.useState(false);
    const [Cart, setCart] = React.useState(user.MyCart);
    //console.log(user);
    const [modal, setModal] = React.useState(false);
    // console.log(Cart);
    const addCart = (props) => {
        if (Cart.length > 10) {
            Alert.alert("Your cart is full!");
            return;
        }
        setVisible(true);
        let arr = Cart;
        arr.push(props)
        setCart(arr);
        firestore().collection('UserInformation').doc(user.id).update({
            MyCart: Cart
        }).then(() => {
            setVisible(false);
        }).catch(err => {
            setVisible(false);
        })
    }
    const ModalView = () => {
        return (
            <Modal animationType='fade' visible={modal} onRequestClose={() => {
                //Alert.alert("Modal has been closed.");
                setModal(!modal);
            }}>
                <View style={model.viewBox}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: '800',
                        margin: 5
                    }}>Product Details</Text>
                    <Image style={{
                        width: 200,
                        height: 150,
                        margin: 5
                    }} source={{ uri: data ? data.ProductImage : "https://thumbs.dreamstime.com/b/download-sign-load-icon-load-system-data-load-loading-bar-froze-computer-download-sign-load-icon-load-system-data-load-loading-bar-195106145.jpg" }} />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '800',
                        margin: 5
                    }}>{data ? data.ProductName : '.'}</Text>
                    <Text style={{
                        color: 'tomato',
                        fontSize: 15,
                        fontWeight: '800',
                        margin: 10
                    }}>{data ? data.ProductPrize : '.'} Tk</Text>
                    <Text>{data ? data.ProductDetails : '.'}</Text>
                    <Button style={model.button} mode='contained'>Add Cart</Button>
                </View>
            </Modal>
        )
    }
    return (
        <DropShadow style={model.shadow}>
            <View style={[model.viewBox, { width: 150, padding: 2 ,height:200}]}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => setModal(true)}>
                    <Image style={model.logo} source={{ uri: data ? data.ProductImage : "https://thumbs.dreamstime.com/b/download-sign-load-icon-load-system-data-load-loading-bar-froze-computer-download-sign-load-icon-load-system-data-load-loading-bar-195106145.jpg" }} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800'
                    }}>{data ? data.ProductName : '.'}</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 15,
                    color: 'tomato',
                }}>{data ? data.ProductPrize : '.'} Tk</Text>
                <TouchableOpacity style={{
                    backgroundColor: '#2980B9',
                    padding: 5,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    margin: 2
                }}>
                    <Text style={{ fontSize: 15, color: '#FFFFFF' }} onPress={() => {
                        addCart(data)
                    }}>Add Cart</Text>
                </TouchableOpacity>
            </View>
            <ModalView />
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("./../Files/66201-loader-balls.json")}
                animationStyle={model.lottie}
                speed={1}
            >
                <Text>Adding to MyCart...</Text>
            </AnimatedLoader>
        </DropShadow>
    );
};

export default Product;
