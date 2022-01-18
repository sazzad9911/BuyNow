import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import model from './styles/model';
import Product from './Cart/Product'
import firestore from '@react-native-firebase/firestore'

const ProductPage = (props) => {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
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
    }, [])
    return (
        <View style={model.viewBox}>
            <Text style={model.headText}>{props.route.params.name}</Text>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    margin: 5
                }}>
                    {
                        data ? (
                            data.length > 0 ? (
                                data.map(data => (
                                    <Product key={data.ProductId} data={data} />
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