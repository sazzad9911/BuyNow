import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert } from 'react-native'
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import ProductDetails from './ProductDetails'

const Product = () => {
    const [modal, setModal] = React.useState(false);
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
                    }} source={require('./../Files/laptop.jpg')} />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '800',
                        margin: 5
                    }}>Product Name Here</Text>
                    <Text style={{
                        color: 'tomato',
                        fontSize: 15,
                        fontWeight: '800',
                        margin: 10
                    }}>48503 Tk</Text>
                    <Text>This product is available in many of the color roduct is available in many of the colo</Text>
                </View>
            </Modal>
        )
    }
    return (
        <DropShadow style={model.shadow}>
            <View style={[model.viewBox, { width: 150, padding: 2 }]}>
                <TouchableOpacity onPress={()=>setModal(true)}>
                    <Image style={model.logo} source={require('./../Files/camera.jpg')} />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '800'
                    }}>Name of the product</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 15,
                    color: 'tomato',
                }}>18443 Tk</Text>
                <TouchableOpacity style={{
                    backgroundColor: '#2980B9',
                    padding: 5,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    margin: 2
                }}>
                    <Text style={{ fontSize: 15, color: '#FFFFFF' }}>Add Cart</Text>
                </TouchableOpacity>
            </View>
            <ModalView />
        </DropShadow>
    );
};

export default Product;
