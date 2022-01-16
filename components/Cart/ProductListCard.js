import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import Icon from 'react-native-vector-icons/AntDesign'
const ProductListCard = () => {
    return (
        <DropShadow style={model.shadow}>
            <View style={styles.view}>
                <Image style={styles.image} source={require('./../Files/camera.jpg')} />
                <Text style={model.text}>24 Megapixels came with one single lense</Text>
                <Text style={[model.text, { color: 'tomato', fontWeight: '700' }]}>33,000 tk</Text>
                <TouchableOpacity style={styles.button}>
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