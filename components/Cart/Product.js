import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native'
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
const Product = () => {
    return (
        <DropShadow style={model.shadow}>
            <View style={[model.viewBox,{width:150,padding:2}]}>
                <Image style={model.logo} source={require('./../Files/camera.jpg')} />
                <Text style={{
                    fontSize:16,
                    fontWeight:'800'
                }}>Name of the product</Text>
                <Text>18443 Tk</Text>
                <TouchableOpacity style={{
                    backgroundColor: '#2980B9',
                    padding:5,
                    borderRadius:10,
                    paddingHorizontal:10,
                    margin:2
                }}>
                    <Text style={{fontSize:15,color: '#FFFFFF'}}>Add Cart</Text>
                </TouchableOpacity>
            </View>
        </DropShadow>
    );
};

export default Product;