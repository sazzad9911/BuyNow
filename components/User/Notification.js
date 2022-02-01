import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import DropShadow from 'react-native-drop-shadow'
import model from './../styles/model';
import firestore from '@react-native-firebase/firestore'
import AnimatedLoader from 'react-native-animated-loader'

const Notification = (props) => {
    const user = props.route.params.user;
    const [Data, setData] = React.useState(null)

    React.useEffect(() => {
        firestore().collection('Notification').orderBy('NewDate', 'desc').onSnapshot(doc => {
            if (doc) {
                let arr = []
                doc.forEach(data => {
                    if (data.get('uid') === user.id) {
                        arr.push(data.data())
                    }
                    //console.log(data.data())
                })
                setData(arr)
            } else {
                setData([]);
            }
        })
    }, [])
    return (
        <ScrollView>
            {
                Data ? (
                    Data.length > 0 ? (
                        Data.map((doc, i) => (
                            <Message key={i} message={doc.Message} />
                        ))
                    ) : (
                        <Text style={{
                            margin: 10,
                            textAlign: 'center',
                            fontWeight: 'bold'
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
        </ScrollView>
    );
};
export default Notification;

const Message = (props) => {
    //console.log(props.message)
    return (
        <DropShadow style={model.shadow}>
            <View style={{
                backgroundColor: '#ffff',
                borderRadius: 10,
                minHeight: 50,
                margin: 5,
                padding: 5,
                justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 17 }}>{props.message}</Text>
            </View>
        </DropShadow>
    )
}