import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import MyTextInput from '../components/MyTextInput';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import MyButtonx from '../components/MyButtonx';
import { scale } from 'react-native-size-matters';

const LoginScreen = () => {
  const [UserName, setUserName] = useState('');
  const [UserPasswrod, setUserPasswrod] = useState('');

  const LoginFunc = () => {
    if (!UserName) {
      Alert.alert('Enter Your name First');
    } else if (!UserPasswrod) {
      Alert.alert('Enter Your Password First');
    } else {
       const url = 'http://fattafatt.com.pk:5000/api/auth/login';
       const LoginData = {
        username: UserName,
        password: UserPasswrod,
      };
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(LoginData),
      })
      .then(response => response.text())
      .then(async responseText => {
        let responseData = JSON.parse(responseText);
        console.log('response Login Screen', responseData);
        if (responseData.code == 200) {
          console.log('success')
        } else {
          console.log('fail')
        }
      })
      .catch(error => {
        console.log(error, 'error from APi');
      });
    }
  };

  

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          height: 120,
          backgroundColor: '#D3D3D3',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={{height:130,width:130,marginBottom:10}}
        source={require('../assets/icons/user.png')}
        />
        <Text style={{fontSize:scale(18),fontWeight:'bold'}}>Login</Text>
      </View>
      <View style={{flex: 1, height: 300}}>
        <MyTextInput
          myLable="User Name"
          myPlaceHolder="email@gmail.com"
          myonChangeText={e => setUserName(e)}
        />
        <MyTextInput
          myLable="Password"
          myPlaceHolder="*******"
          myonChangeText={e => setUserPasswrod(e)}
        />
      </View>
      <KeyboardSpacer />

      <MyButtonx
        Mytext="Login"
        myPress={() => LoginFunc()}
        mycolor={{backgroundColor: 'green'}}
      />
    </View>
  );
};

export default LoginScreen;
