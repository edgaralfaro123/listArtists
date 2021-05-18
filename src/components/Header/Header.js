import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { colors } from '../../helpers/constants';

function Header (props) {
    const {online = false } = props
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Top Artists</Text>

            <Text style={online ? styles.online : styles.offline }>{online ? 'Online' : 'Offline'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:colors.blueTwo,
        alignItems:'center',
        paddingBottom:5
    },
    text:{
        marginTop: 20, 
        fontSize: 35,
         fontWeight: '700',
         color:colors.lightBlue, 
         justifyContent:'center'
    },
    online: { 
        fontSize: 12,
        color: colors.greenPrimary
    },
    offline: {
        fontSize: 12,
        color:'red',
    }
    
});



export default Header;
            