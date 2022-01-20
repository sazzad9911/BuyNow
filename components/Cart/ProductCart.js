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
    return (
        <DropShadow style={model.shadow}>
            <View style={{ backgroundColor: '#ffff',flexDirection:'row',alignItems: 'center',margin:5,borderRadius:10}}>
            <Checkbox status={Check? 'checked' : 'unchecked'} onPress={() =>{
                setCheck(!Check)
                if(Check){
                    props.select(props.id)
                }else{
                    props.unselect(props.id)
                }
            }}/>
                <Image style={[model.image]} source={require('./../Files/playstore.png')}/>
                <View style={{flex:2}}>
                    <Text style={{fontSize:17}}>{ProductName}</Text>
                    <Text style={{fontSize:13,color:'tomato'}}>{ProductPrize} Tk</Text>
                </View>
                <TouchableOpacity onPress={() =>props.delete(props.id)}>
                <MaterialCommunityIcons style={{margin:15}} name="delete" size={25}/>
                </TouchableOpacity>
            </View>
        </DropShadow>
    );
};

export default ProductCart;