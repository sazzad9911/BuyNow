import React from 'react';
import { View, Text, ScrollView,Dimensions } from 'react-native'
import model from './styles/model';
import Product from './Cart/Product'
import firestore from '@react-native-firebase/firestore'

const ProductPage = (props) => {
    const [data, setData] = React.useState(null)
    const window= Dimensions.get('window');
    const user =props.route.params.user;

    React.useEffect(() => {
        //console.log(uid)
        const product=props.route.params.name.toLowerCase();
        firestore().collection('ProductList').orderBy('NewDate', 'desc').onSnapshot(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    if(data.get('ProductType') === product){
                        arr.push(data.data())
                    }
                })
                setData(arr)
            } else {
                setData([]);
            }
        })
    }, [props.route.params.name])
    return (
        <View style={model.viewBox}>
            <Text style={model.headText}>{props.route.params.name}</Text>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: 5,
                    minHeight: window.height-20,
                    width:window.width-10
                }}>
                    {
                        data ? (
                            data.length > 0 ? (
                                data.map(data => (
                                    <Product user={user} key={data.ProductId} data={data} />
                                ))
                            ) :
                                (
                                    <Text style={{
                                        margin: 10,
                                        textAlign: 'center',
                                    }}>Empty</Text>
                                )
                        ) : (
                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                            }}>Loading...</Text>
                        )
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default ProductPage;