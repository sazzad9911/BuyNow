import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import Icon from 'react-native-vector-icons/AntDesign'
const ProductListCard = (props) => {
    const product=props.data
    return (
        <DropShadow style={model.shadow}>
            <View style={styles.view}>
                <Image style={styles.image} source={{ uri:product.ProductImage}} />
                <Text style={model.text}>{product.ProductName}</Text>
                <Text style={[model.text, { color: 'tomato', fontWeight: '700' }]}>{product.ProductPrize}</Text>
                <TouchableOpacity style={styles.button} onPress={() =>{
                    props.delete(product.ProductId);
                }}>
                    <Icon name="delete" size={25} color='#ffff' />
                    <Text style={{ color: '#ffff' }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </DropShadow>
    );
};
export default ProductListCard;
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    view: {
        width: 180,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 10,
        padding: 5,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 5,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 5
    }
})