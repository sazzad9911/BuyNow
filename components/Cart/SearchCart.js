import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Dimensions } from 'react-native';
import {Button} from 'react-native-paper'
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';

const SearchCart = (props) => {
    const [visible, setVisible] = React.useState(false);
    const window = Dimensions.get('window');
    const product=props.product;
    return (
        <DropShadow style={model.shadow}>
            <TouchableOpacity onPress={() => setVisible(!visible)}>
                <View style={{
                    flexDirection: 'row', width: window.width - 20,
                    backgroundColor: '#ffff',
                    marginLeft: 10,
                    borderRadius: 15
                }}>
                    <Image source={{uri: product ? product.ProductImage : "https://thumbs.dreamstime.com/b/download-sign-load-icon-load-system-data-load-loading-bar-froze-computer-download-sign-load-icon-load-system-data-load-loading-bar-195106145.jpg"}} style={{
                        height: 80,
                        width: 100,
                    }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        margin: 10
                    }}>{product? product.ProductName:'.'}</Text>
                </View>
            </TouchableOpacity>
            <Modal visible={visible} onRequestClose={() => setVisible(!visible)}>
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
                    }} source={{uri: product ? product.ProductImage : "https://thumbs.dreamstime.com/b/download-sign-load-icon-load-system-data-load-loading-bar-froze-computer-download-sign-load-icon-load-system-data-load-loading-bar-195106145.jpg"}} />
                    <Text style={{
                        fontSize: 15,
                        fontWeight: '800',
                        margin: 5
                    }}>{product? product.ProductName:'.'}</Text>
                    <Text style={{
                        color: 'tomato',
                        fontSize: 15,
                        fontWeight: '800',
                        margin: 10
                    }}>{product? product.ProductPrize:'.'} Tk</Text>
                    <Text>This product is available in many of the color roduct is available in many of the colo</Text>
                    <Button style={model.button} mode='contained'>Add Cart</Button>
                </View>
            </Modal>
        </DropShadow>
    );
};

export default SearchCart;