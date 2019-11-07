import React from 'react';
import { TouchableHighlight ,Text ,View ,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


    const MainButton = props => (
 
            <TouchableHighlight onPress={props.onPress}>
             <LinearGradient start={{x:0 , y:0}} end ={{x:1 , y:0}} colors={['#FAC858','#F6813A']}  style={styles.button} >
               <Text style={styles.myText}>{props.children}</Text>
             </LinearGradient>
            </TouchableHighlight>
    );

    const styles= StyleSheet.create(
      {
      button:
      {
          height:50,
          justifyContent:'center',
         marginTop:80,
         marginLeft:40,
         marginRight:40,
         borderRadius:3
      },
      myText:
      {
          color:'#fff',
         textAlign:'center'
      },
      });
    export default MainButton;