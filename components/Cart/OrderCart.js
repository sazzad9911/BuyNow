import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import model from './../styles/model';
const OrderCart = (props) => {
    const data = props.data
    const [Read, setRead] = React.useState(data.Read)
    const [Tk, setTk]= React.useState(null);
    const [date, setdate]= React.useState(null)

    React.useEffect(() =>{
        let tk=0;
        data.ProductDetails.forEach(doc=>{
            tk=tk+doc.ProductPrize
        })
        setTk(tk);

        const newDate=data.NewDate.toDate();
        let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        let text=newDate.getDate()+' '+months[newDate.getMonth()]+' '+newDate.getFullYear()
        setdate(text);
    },[])
    //console.log()
    return (
        <DropShadow style={model.shadow}>
            <View style={[model.viewBox, { flexDirection: 'row' }]}>
                <Image style={[styles.image, { borderRadius: 5, margin: 5 }]} source={{ uri: data.UserDetails.Photo }} />
                <View style={{
                    flex: 2,
                }}>
                    <Text style={styles.text}>{data.UserDetails.Name}, Phone: {data.UserDetails.Phone} order those flowing items</Text>
                    {
                        data.ProductDetails.map((doc, i)=>(
                            <Text key={i}>{i+1}. {doc.ProductName}</Text>
                        ))
                    }
                </View>

                <View style={styles.view}>
                    <View>
                        <Text style={[model.text, { color: 'red' }]}>{data.ProductDetails.length} items total: {Tk} tk</Text>
                        <Text style={model.text}>{date? date:'.'}</Text>
                    </View>
                    {
                        Read ? (
                            <View></View>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.button} onPress={() =>{
                                    props.accept(data)
                                    setRead(true)
                                
                                }}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>Accept</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() =>{
                                    props.decline(data)
                                    setRead(true)

                                }}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>Decline</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </View>
        </DropShadow>
    );
}
export default OrderCart;
const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90
    },
    text: {
        flex: 2,
        fontWeight: '800',
        fontSize: 16,
    },
    view: {
        flex: 3
    },
    button: {
        padding: 5,
        backgroundColor: 'green',
        borderRadius: 10,
        margin: 5,
        paddingHorizontal: 15
    }
})