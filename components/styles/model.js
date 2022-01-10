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
                width: 2,
                height: 2
            },
            shadowOpacity: .5,
            shadowRadius: 3
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
        width: '100%',
    }
})
export default model