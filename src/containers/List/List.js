import React, { useState,useEffect} from 'react';
import { Text, View,Dimensions, StyleSheet, StatusBar,Linking, FlatList,Image ,TouchableOpacity} from 'react-native';
import { colors } from '../../helpers/constants';
import { metrics } from '../../helpers/Metrics';
import Artist from '../../models/artistModel.js'
import {getArtists} from '../../controllers/artistController';
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import RenderItem from '../../components/List/List'

const List = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        obtenerArtistas();
    }, [])

    const obtenerArtistas = async () => {
        setLoading(true);
        const result =  await getArtists();
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