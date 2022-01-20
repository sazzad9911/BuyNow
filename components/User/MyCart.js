import React from 'react';
import{View, Text,ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import ProductCart from './../Cart/ProductCart'
import model from './../styles/model';
const MyCart = (props) => {
    const user = props.route.params.user;
    const [Cart,setCart]= React.useState(user.MyCart)
    const [Orders,setOrders]= React.useState([])
    let check=[]
    const deleteCart=(position)=> {
        let arr=[]
        Cart.forEach((doc,i)=> {
            if(i==position){
                
            }else{
                arr.push(doc)
            }
        })
        setCart(arr)
    }
    const selectCart=(position)=>{
        
        Cart.forEach((doc,i)=>{
            if(i==position){
                setOrders([...Orders,doc])
            }
        })
        console.log(Orders)
    }
    const unselectCart=(position)=>{
        let arr=[]
        Orders.forEach((doc,i)=>{
            if(i==position){

            }else{
               arr.push(doc) 
            }
        })
        setOrders(arr)
        console.log(Orders)
    }
    
    return (
        <ScrollView>
            {
                Cart.map((doc,i)=>(
                    <ProductCart key={i} id={i} delete={(k)=>deleteCart(k)} data={doc}
                        select={(n)=>selectCart(n)} unselect={(n)=>unselectCart(n)}
                    />
                ))
            }
            <View style={model.viewBox}>
            <Button style={model.button} mode='contained'>Order Now</Button>
            </View>
        </ScrollView>
    );
};
export default MyCart; 