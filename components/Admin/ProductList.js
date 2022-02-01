import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import ProductListCard from './../Cart/ProductListCard'
import model from './../styles/model';
import firestore from '@react-native-firebase/firestore'
import AnimatedLoader from 'react-native-animated-loader'

const ProductList = () => {
    const [Product, setProduct] = React.useState(null)

    React.useEffect(() => {
        firestore().collection('ProductList').orderBy('NewDate', 'desc').get().then(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    arr.push(data.data())
                })
                setProduct(arr)
            } else {
                setProduct([])
            }
        })
    }, [])
    const deleteProduct = (id) => {
        firestore().collection('ProductList').doc(id).delete().then(() => {
            Alert.alert("Success", "Delete successful")
        })
    }
    return (
        <ScrollView>
            <View style={[model.view, { flexDirection: 'row', flexWrap: 'wrap' }]}>
                {
                    Product ? (
                        Product.length > 0 ? (
                            Product.map((doc, i) => (
                                <ProductListCard key={i} data={doc} delete={(id) => deleteProduct(id)} />
                            ))
                        ) : (
                            <Text style={{
                                margin: 10,
                                textAlign: 'center',
                            }}>Empty</Text>
                        )
                    ) : (
                        <AnimatedLoader
                            visible={true}
                            overlayColor="rgba(255,255,255,0.75)"
                            source={require("./../Files/66201-loader-balls.json")}
                            animationStyle={model.lottie}
                            speed={1}
                        >
                            <Text>Please wait...</Text>
                        </AnimatedLoader>
                    )
                }
            </View>
        </ScrollView>
    );
};
export default ProductList