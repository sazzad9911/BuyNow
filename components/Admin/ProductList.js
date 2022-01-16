import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductListCard from './../Cart/ProductListCard'
import model from './../styles/model';
const ProductList = () => {
    return (
        <ScrollView>
            <View style={[model.view,{flexDirection: 'row',flexWrap:'wrap'}]}>
                <ProductListCard />
                <ProductListCard />
            </View>
        </ScrollView>
    );
};
export default ProductList