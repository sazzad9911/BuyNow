import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
const OrderCart = () => {
    const [Read, setRead] = React.useState(null)
    return (
        <DropShadow style={model.shadow}>
            <View style={[model.viewBox, { flexDirection: 'row' }]}>
                <Image style={styles.image} source={require('./../Files/camera.jpg')} />
                <Text style={styles.text}>24 Megapixels came with one single lense</Text>
                <View style={styles.view}>
                    <View>
                        <Text style={[model.text, { color: 'red' }]}>3 items total: 33,000 tk</Text>
                        <Text style={model.text}>3 Dec 2022</Text>
                    </View>
                    {
                        Read ? (
                            <View></View>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>Decline</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </View>
        </DropShadow>
    );
}
export default OrderCart;
const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90
    },
    text: {
        flex: 2,
        fontWeight: '800',
        fontSize: 16,
    },
    view: {
        flex: 3
    },
    button: {
        padding: 5,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 5,
        paddingHorizontal: 15
    }
})