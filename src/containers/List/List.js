import React, { useState,useEffect} from 'react';
import {  View, StyleSheet, FlatList} from 'react-native';
import { colors } from '../../helpers/constants';

import {getArtists} from '../../controllers/artistController';
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import RenderItem from '../../components/List/List'
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from '../../store/actions/componentsActions';

const List = (props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [enlinea, setenlinea] = useState(false)
    const componenteprueba = useSelector(state => state.componentsReducer)

    useEffect(() => {
        obtenerArtistas();
    }, [])

    const obtenerArtistas = async () => {
        setLoading(true);
        const result =  await getArtists();
        if(result.length>0){
            dispatch(changeValue({ online: true,list:result}))
            setenlinea(true);
            setData(result);
        }else{
            let lists = componenteprueba.state.list == undefined ? [] : componenteprueba.state.list;
            dispatch(changeValue({ online: false,list: lists }))
            setenlinea(false);
            setData(lists);
        }
        
        setLoading(false);
        
    }

    return (
        <>
            <View style={styles.background}>
                <Header online = {enlinea}/>
                { loading ? 
                    <Loading/>
                : 
                    <View style={styles.scroll}>
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
const styles = StyleSheet.create({
    background: {
        backgroundColor:colors.lightBlue
    },
    scroll:{
        marginTop: 20 
    }
});

export default List;