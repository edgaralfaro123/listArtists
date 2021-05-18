import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../helpers/constants';

function Header () {

    return(
        <View style={{backgroundColor:colors.blueTwo,alignItems:'center',paddingBottom:5}}>
            <Text style={{ marginTop: 20, fontSize: 35, fontWeight: '700',color:colors.lightBlue, justifyContent:'center' }}>Top Artists</Text>
        </View>
    )
}

export default Header;
            