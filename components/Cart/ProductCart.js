import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
import {Checkbox} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductCart = (props) => {
    const [ProductName,setProductName] =React.useState('Frouits');
    const [ProductPrize,setProductPrize] =React.useState('200');
    const [Check,setCheck] = React.useState(false);
    const data=props.data;
    return (
        <DropShadow style={model.shadow}>
            <View style={{ backgroundColor: '#ffff',flexDirection:'row',alignItems: 'center',margin:5,borderRadius:10}}>
            <Checkbox status={Check? 'checked' : 'unchecked'} onPress={() =>{
                setCheck(!Check)
                if(!Check){
                    props.select(props.data)
                }else{
                    props.unselect(props.data)
                }
            }}/>
                <Image style={[model.image]} source={{ uri: data? data.ProductImage : 'https://thumbs.dreamstime.com/b/download-sign-load-icon-load-system-data-load-loading-bar-froze-computer-download-sign-load-icon-load-system-data-load-loading-bar-195106145.jpg' }}/>
                <View style={{flex:2}}>
                    <Text style={{fontSize:17}}>{data? data.ProductName:'.'}</Text>
                    <Text style={{fontSize:13,color:'tomato'}}>{data?data.ProductPrize:'.'} Tk</Text>
                </View>
                <TouchableOpacity onPress={() =>props.delete(props.id)}>
                <MaterialCommunityIcons style={{margin:15}} name="delete" size={25}/>
                </TouchableOpacity>
            </View>
        </DropShadow>
    );
};

export default ProductCart;