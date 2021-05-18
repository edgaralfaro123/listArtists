import React, { useState,useEffect} from 'react';
import { Text, View,Dimensions, StyleSheet, StatusBar,Linking, FlatList,Image ,TouchableOpacity} from 'react-native';
import { colors } from '../../helpers/constants';
import { metrics } from '../../helpers/Metrics';
import Artist from '../../models/artistModel.js'
import {getArtists} from '../../controllers/artistController';
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import RenderItem from '../../components/List/List'
/* 
const RenderItem = ({ item  }) => {
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
        
            <View style={{backgroundColor:colors.blueTwo,padding:20,marginLeft:20,marginRight:20,marginTop:5,marginBottom:5, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20, borderRadius: 10 }}>
                <View style={{ flexDirection: 'column',flex:1}}> 
                    <Text style={{fontWeight: 'bold',color:colors.lightBlue}} numberOfLines={1}>Name: {item.name}</Text>   
                    <Text style={{fontWeight: 'bold',color:colors.lightBlue}} numberOfLines={1}>Listeners: {item.listeners}</Text>            
                    <Text style={{fontWeight: 'bold',color:colors.lightBlue}} numberOfLines={1}>Mbid: {item.mbid}</Text>            
                   
                    <TouchableOpacity
                        onPress={() =>
                            Linking.openURL(url)
                        }
                    >
                       <Text style={{fontWeight: 'bold',color: colors.greenPrimary}} numberOfLines={1}>
                            Url:
                            {' '}
                            {item.url}
                        </Text>
                    </TouchableOpacity>
                   
                    <Text style={{fontWeight: 'bold',color:colors.lightBlue}} numberOfLines={1}>Streamable: {item.streamable}</Text>                     
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    {
                        (item.image.length > 0 ,
                            item.image.map((imagen)=> {
                               let valorWidth = tamanoImagen[imagen.size]();
                            return (
                                <Image
                                    style = {{
                                        width: metrics.screenWidth * valorWidth,
                                        height:metrics.screenWidth * valorWidth,
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
} */

const List = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        obtenerArtistas();
    }, [])

    const obtenerArtistas = async () => {
        setLoading(true);
        const result =  await getArtists();
        console.log('result2',result);
        setData(result);
        setLoading(false);
    }

    return (
        <>
            <View style={{backgroundColor:colors.lightBlue}}>
                <Header/>
                { loading ? 
                    <Loading/>
                : 
                    <View style={{marginTop: 20 }}>
                    <FlatList
                        data={data}
                        renderItem={({item})=> (
                            <RenderItem item={item} />
                        )}
                        keyExtractor={(_,i) => i}
                        refreshing={loading}
                        onRefresh={() => {
                            obtenerArtistas()
                        }}
                    />
                    </View>}
            </View>
           
        </>
    );

}

export default List;