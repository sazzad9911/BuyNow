import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import model from './styles/model';
import Product from './Cart/Product'

const ProductPage = (props) => {
    return (
        <View style={model.viewBox}>
            <Text style={model.headText}>{props.route.params.name}</Text>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap:'wrap',
                    justifyContent: 'center',
                    margin:5
                }}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductPage;