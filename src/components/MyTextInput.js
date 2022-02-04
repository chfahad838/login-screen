import React from 'react'
import { View, Text,TextInput } from 'react-native'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const MyTextInput = ({
    myLable='',
    myPlaceHolder='',
    myonChangeText
}) => {
    return (
        <View>
            <Text style={{fontSize:scale(14),fontWeight:'700',marginTop:10}}>{myLable}</Text>
              <TextInput 
            //    autoFocus={myAutoFocus}
               selectionColor={'red'}
               placeholder={myPlaceHolder}
               placeholderTextColor="#C9CBCE"
               autoCapitalize="none"
               autoCorrect={false}
            //    returnKeyType="next"
               underlineColorAndroid="transparent"
               blurOnSubmit
               keyboardType='default'
               style={{    
                color: 'black',
                height: verticalScale(45),
                borderBottomWidth:1,

                fontSize: 14,
                backgroundColor: '#EFEEF4',
                paddingHorizontal: 10,
                borderRadius: 6}}
                onChangeText={myonChangeText}
              />
        </View>
    )
}

export default MyTextInput
