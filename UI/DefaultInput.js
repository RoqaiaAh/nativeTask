import React from "react";
import {TextInput , StyleSheet} from "react-native";

const DefaultInput = props => (
    <TextInput 
    style={styles.input}
    {...props}
    />

);
const styles = StyleSheet.create(
    {
        input:
        {
            marginLeft:30,
            marginRight:30,
            marginBottom:10,
            color:'#fff',
            borderBottomColor:'#fff',
            borderBottomWidth:1,
        },
      
    });
export default DefaultInput ;