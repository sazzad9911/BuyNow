import React from 'react';
import{View, Text,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import ProductCart from './../Cart/ProductCart'
import model from './../styles/model';
const MyCart = () => {
    return (
        <ScrollView>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <ProductCart/>
            <View style={model.viewBox}>
            <Button style={model.button} mode='contained'>Order Now</Button>
            </View>
        </ScrollView>
    );
};
export default MyCart;