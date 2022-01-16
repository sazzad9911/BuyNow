import React from 'react';
import {View,Text,ScrollView} from 'react-native'
import OrderCart from '../Cart/OrderCart';
const OrderList = () => {
    return (
        <ScrollView>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
            <OrderCart/>
        </ScrollView>
    );
};
export default OrderList;