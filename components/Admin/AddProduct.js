import React from 'react';
import { View, Text, ScrollView,Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import model from '../styles/model';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore'
import { launchImageLibrary } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import uuid from 'react-native-uuid'
import AnimatedLoader from 'react-native-animated-loader'

const AddProduct = () => {
    const [ProductName, setProductName] = React.useState(null)
    const [ProductImage, setProductImage] = React.useState(null)
    const [ProductType, setProductType] = React.useState(null)
    const [ProductDetails, setProductDetails] = React.useState(null)
    const [ProductPrize, setProductPrize] = React.useState(null)
    const [ImageName, setImageName] = React.useState(null);
    const [visible, setVisible]= React.useState(false);
    return (
        <ScrollView>
            <View style={[model.view]}>
                <Text style={model.headText}>Add Product</Text>
                <TextInput style={model.input} label='Product Name' placeholder='Enter product name...'
                    value={ProductName} onChangeText={(val) => setProductName(val)} />
                <TextInput style={model.input} label='Product Details' multiline={true} placeholder='Enter product details...'
                    value={ProductDetails} onChangeText={(val) => setProductDetails(val)} />
                <TextInput style={model.input} label='Product Prize' keyboardType='numeric' placeholder='Enter product details...'
                    value={ProductPrize} onChangeText={(val) => setProductPrize(val)} />
                <Picker mode='dropdown'
                    style={{
                        width: 280
                    }}
                    selectedValue={ProductType}
                    onValueChange={(itemValue, itemIndex) =>
                        setProductType(itemValue)
                    }>
                    <Picker.Item label="Select Product Type" value="" />
                    <Picker.Item label="Mobile" value="mobile" />
                    <Picker.Item label="FAN" value="fan" />
                    <Picker.Item label="Monitor" value="monitor" />
                    <Picker.Item label="Laptop" value="laptop" />
                    <Picker.Item label="AC" value="ac" />
                    <Picker.Item label="Washing Machine" value="washing-machine" />
                    <Picker.Item label="Freeze" value="freeze" />
                    <Picker.Item label="Camera" value="camera" />
                </Picker>
                <Button disabled={ProductImage ? true : false} icon={!ProductImage ? 'camera-plus-outline' : 'check-underline'} mode="contained" onPress={() => {
                    launchImageLibrary({
                        mediaType: 'photo',
                        quality: .5,
                    }, response => {
                        if (response.assets) {
                            setProductImage(response.assets[0].uri)
                            setImageName(response.assets[0].fileName)
                        }
                    })
                }} style={model.button}>Upload Image</Button>
                <Button mode="contained" onPress={() => {
                    
                    if(!ProductName || !ProductType || !ProductPrize || !ProductDetails){
                        Alert.alert("Invalid",'Please fill all fields')
                        return
                    }
                    setVisible(true)
                    const id = uuid.v1()
                    storage().ref('product/' + ImageName).putFile(ProductImage).then(() => {
                        storage().ref('product/' + ImageName).getDownloadURL().then(url => {
                            firestore().collection('ProductList').doc(id).set({
                                ProductId: id,
                                ProductName: ProductName,
                                ProductImage: url,
                                ProductType: ProductType,
                                ProductPrize: parseInt(ProductPrize),
                                ProductDetails: ProductDetails,
                                NewDate: new Date(),
                            }).then(() => {
                                setVisible(false);
                                Alert.alert('Success','Successfully updated')
                            }).catch(err=> {
                                setVisible(false);
                                Alert.alert('Error',err.message);
                            })
                        })
                    })
                }} style={model.button}>Add Post</Button>
            </View>
            <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("./../Files/66201-loader-balls.json")}
                animationStyle={model.lottie}
                speed={1}
            >
                <Text>Please wait...</Text>
            </AnimatedLoader>
        </ScrollView>
    );
};

export default AddProduct;