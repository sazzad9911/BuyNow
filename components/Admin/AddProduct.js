import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput,Button } from 'react-native-paper'
import model from '../styles/model';
import { Picker } from '@react-native-picker/picker';

const AddProduct = () => {
    const [ProductName, setProductName] = React.useState(null)
    const [ProductImage, setProductImage] = React.useState(null)
    const [ProductType, setProductType] = React.useState(null)
    const [ProductDetails, setProductDetails] = React.useState(null)
    const [ProductPrize, setProductPrize] = React.useState(null)
    const [selectedLanguage, setSelectedLanguage] = React.useState();
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
                    width:280
                }}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Select Product Type" value="" />
                    <Picker.Item label="Mobile" value="mobile"/>
                    <Picker.Item label="FAN" value="fan"/>
                    <Picker.Item label="Monitor" value="monitor"/>
                    <Picker.Item label="Laptop" value="laptop"/>
                    <Picker.Item label="AC" value="ac"/>
                    <Picker.Item label="Washing Machine" value="washing-machine"/>
                    <Picker.Item label="Freeze" value="freeze"/>
                    <Picker.Item label="Camera" value="camera"/>
                </Picker>
                <Button disabled={ProductImage?true:false} icon={!ProductImage?'camera-plus-outline':'check-underline'} mode="contained" onPress={()=>{
                    setProductImage('dsf');
                }} style={model.button}>Upload Image</Button>
                <Button mode="contained" onPress={()=>{}} style={model.button}>Add Post</Button>
            </View>
        </ScrollView>
    );
};

export default AddProduct;