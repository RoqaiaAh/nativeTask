import React, { Component } from 'react';
import { View, Button, Image, ImageBackground, StyleSheet, Text } from 'react-native';
import asstesGroup from '../../assets/Home-repair.png';
import asstesLogo from '../../assets/Group18.png';
import DefaultInput from '../../UI/DefaultInput';
import MainTabs from '../screens/MainTabs';
import MainButton from '../../UI/MainButton';


class loginScreen extends Component {
    loginHandler = () => {
        MainTabs();
    }
    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:'',
        }
    }
    Validation =()=> {
const {email,pass} = this.state;
if(email=="") {
    console.log('please enter email');
}
if(pass=="")
{
    console.log('please enter password');
}
    }

    render() {
        return (
            <ImageBackground source={asstesGroup} style={styles.BgImage}>

                <View style={styles.container}>

                    <View style={styles.input}>
                        <Image source={asstesLogo} style={styles.logImg} />
                        <DefaultInput placeholder="البريد الالكتروني" placeholderTextColor='#fff' onChangeText={email => this.setState({email})} />
                        <DefaultInput placeholder="كلمه المرور" placeholderTextColor='#fff' onChangeText={pass => this.setState({pass})}/>
                    </View>
                    <View style={styles.mybuttons}>
                        <MainButton onPress={this.loginHandler} > تسجيل الدخول </MainButton>
                        <View style={styles.desingButton}>
                            <Button color='transparent' title="لديك حساب" />
                            <Button color='transparent' title="تسجيل دخول" />
                        </View>
                    </View>
                </View>




            </ImageBackground >

        );
    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
        },
        BgImage:
        {
            flex: 1,
            width: "100%",


        },
        logImg:
        {

            marginTop: 40,
            marginBottom: 130,
            marginLeft: 140,

        },

        desingButton: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 120,
            paddingLeft: 130
        },
        mybuttons:
        {
            marginTop:69
        },

    });
export default loginScreen;