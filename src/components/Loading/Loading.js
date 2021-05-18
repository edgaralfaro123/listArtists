
import React from 'react';
import { Text, View,Image ,StyleSheet} from 'react-native';
import { colors } from '../../helpers/constants';
import { metrics } from '../../helpers/Metrics';
function Loading () {

    return(
        <View style={styles.card}>
            <Text style={styles.text}>Cargando...</Text>
            <Image
                style = {{
                    width: metrics.screenWidth * 0.1,
                    height: metrics.screenWidth *0.1,
                    borderRadius: 200
                }}
                source = {{
                    uri: 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
                }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: metrics.screenHeight ,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:colors.blueTwo,
        fontSize: 30
    }
    
});
export default Loading;