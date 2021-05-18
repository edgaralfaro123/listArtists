import React from 'react';
import { Text, View,Linking,Image ,TouchableOpacity,StyleSheet} from 'react-native';
import { colors } from '../../helpers/constants';
import { metrics } from '../../helpers/Metrics';

const RenderItem = ({ item , online }) => {


    let url =item.url;

    const tamanoImagen = {
        small:()=> 0.07,
        medium:()=>  0.09 ,
        large:()=>  0.11,
        extralarge:()=> 0.13 ,
        mega:()=>  0.15
    }

    return (
    <>
        
            <View style={styles.card}>
                <View style={styles.cardbody}> 
                    <Text style={styles.textouno} numberOfLines={1}>Name: {item.name}</Text>   
                    <Text style={styles.textouno} numberOfLines={1}>Listeners: {item.listeners}</Text>            
                    <Text style={styles.textouno} numberOfLines={1}>Mbid: {item.mbid}</Text>            
                   
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL(url)
                        }
                    >
                       <Text style={online ? styles.textdos : {color:'red'}} numberOfLines={1}>
                            Url:
                            {' '}
                            {item.url}
                        </Text>
                    </TouchableOpacity>
                   
                    <Text style={styles.textouno} numberOfLines={1}>Streamable: {item.streamable}</Text>                     
                    <View style={styles.images}>
                    {
                        (item.image.length > 0 ,
                            item.image.map((imagen,i)=> {
                               let valueWidth = tamanoImagen[imagen.size]();
                            return (
                                <Image 
                                    key={i}
                                    style = {{
                                        width: metrics.screenWidth * valueWidth,
                                        height:metrics.screenWidth * valueWidth,
                                        borderRadius: 200,
                                        margin:5
                                    }}
                                    source = {{
                                        uri: imagen.['#text'],
                                    }}
                                /> 
                            )
                            })
                        )
                    }
                    </View>
                </View>
                
            </View>
     
    </>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor:colors.blueTwo,
        padding:20,
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        marginBottom:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10 
    },
    cardbody:{
        flexDirection: 'column',
        flex:1
    },
    textouno:{
        fontWeight: 'bold',
        color:colors.lightBlue
    },
    textdos:{
        fontWeight: 'bold',
        color: colors.greenPrimary 
    },
    images:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }

    
});

export default RenderItem;