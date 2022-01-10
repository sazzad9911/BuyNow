import {StyleSheet,Dimensions} from 'react-native'

const window=Dimensions.get('window');
const model=StyleSheet.create({
    view: {
        margin:10,
        borderRadius:15,
        backgroundColor:'#ffff',
        width:window.width-20,
        height:window.height-20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width:80,
        height:80,
    },
    input: {
        width:280,
        backgroundColor: '#ffff'
    },
    button: {
        borderRadius:20,
        width:280,
        margin:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize:15,
        fontFamily:'Helvet',
        fontWeight:'300',
        margin:5
    },
    shadow: {
        shadowColor: '#000',
            shadowOffset: {
                width: 1,
                height: 1
            },
            shadowOpacity: .2,
            shadowRadius: 5
    },
    avatar: {
        backgroundColor: '#ffff',
        margin:5
    },
    drawer: {
        backgroundColor: '#ffff',
        margin:10,
        borderRadius:20
    },
    viewBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
        padding:5,
        margin:5,borderRadius:10
    },
    image: {
        height: 100,
        width: 100,
        borderRadius:5,
        margin:5
    },
    headText: {
        fontSize:17,
        fontWeight: '800',
        margin:5,
    }
})
export default model