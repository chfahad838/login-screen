// // import React, {useState, useEffect} from 'react';
// // import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// // // constents
// // import {COLORX, FONT} from '../consents/Appconstesnts';

// // //COmponent
// // import MyButton from '../components/MyButton';

// // const HomeScreen = props => {
// //   const [Value1, setValue1] = useState(4);
// //   const [Value2, setValue2] = useState(2);
// //   const [Answer, setAnswer] = useState('your answer is');

// //   const sum = () => {
// //     setAnswer(Value1 + Value2);
// //   };

// //   const runt2nd = () => {
// //     Alert.alert('me run tooo and value is');
// //   };

// //   return (
// //     <View>
// //       {/* <MyButton
// //       xx={()=>sum()}
// //       MyText='SUM'
// //       />

// //      <MyButton
// //       xx={()=>runt2nd()}
// //       MyText='Alert'
// //       />

   
// //       <Text style={{fontSize: 30}}>{Answer}</Text> */}

// //       <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
// //         <View style={{flex: 1, backgroundColor: 'red'}}>
// //           <Text>hhhhhhh</Text>
// //         </View>
// //         <View style={{backgroundColor: 'green'}}>
// //           <Text>000000000000000</Text>
// //         </View>
// //       </View>

// //       {/* <View style={{flex: 1}}>
// //         <View
// //           style={{
// //             width: '100%',
// //             height: 80,
// //             backgroundColor: 'green',
// //             flexDirection: 'row',
// //             justifyContent: 'space-between',
// //           }}>
// //           <View style={{justifyContent: 'center'}}>
// //             <View>
// //               <Text style={{left: 20}}>My Name is Haroon</Text>
// //             </View>
// //           </View>
// //           <View style={{}}>
// //             <View style={{right: 18, backgroundColor: 'pink'}}>
// //               <Text style={{fontSize: 30}}>@</Text>
// //             </View>
// //           </View>
// //         </View>
// //         <View
// //           style={{
// //             width: '100%',
// //             height: 80,
// //             backgroundColor: 'red',
// //             flexDirection: 'row',
// //             justifyContent: 'space-between',
// //           }}>
// //           <View style={{justifyContent: 'center', backgroundColor: 'pink'}}>
// //             <Text style={{fontSize: 30}}>@</Text>
// //           </View>
          
// //         </View>
        
// //       </View>
// //     */}
// //     </View>
// //   );
// // };

// // export default HomeScreen;

// // const styles = StyleSheet.create({});



// import React,{useState,useEffect} from 'react'
// import { View, Text,SafeAreaView,TouchableOpacity, Alert } from 'react-native'



// import MyYButton from "../components/MyYButton";
// import MyButton from "../components/MyButton";

// // // constents
// import {COLORX, FONTX} from '../consents/Appconstesnts';

// const HomeScreen = (props) => {
// const [Valueone, setValueone] = useState(10);
// const [Valuetwo, setValuetwo] = useState(30);
// const [Answer, setAnswer] = useState(0);

// const SumFunc =()=>{
//   setAnswer(Valueone+Valuetwo)
// }

// const AlertFunc =()=>{
//   Alert.alert('yess i am also running')
// }


//   return (
//     <SafeAreaView>


// <MyYButton
//        MyText='sum'
//        clickFunc={()=>SumFunc()}
//        color='blue'
//       />


//       <MyYButton
//        MyText='Alert'
//        clickFunc={()=>AlertFunc()}
//        color='yellow'
//       />


//       <MyButton 
//       xx={()=>AlertFunc()}
//       MyText='alet'
//       />

//       <Text style={{fontSize:FONTX.heading}}>{Answer}</Text>
//     </SafeAreaView>
//   )
// }

// export default HomeScreen

