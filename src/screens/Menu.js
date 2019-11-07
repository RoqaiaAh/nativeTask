import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity,ScrollView, Dimensions } from 'react-native';
import asstesLogo from '../../assets/Group18.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainButton from '../../UI/MainButton';


class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mylogo}>
          <Image style={styles.logoImg} source={asstesLogo} />
        </View>
    
        <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >الرئيسية</Text>
            <Icon name="home" style={styles.Icon} size={20} color="#FAC858" />
            </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >طلباتي</Text>
            <Icon name="fa-fa-tools" style={styles.Icon} size={20} color="#FAC858" />
          </View>
          </TouchableOpacity>
          <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >المحفظه</Text>
            <Icon name="wallet" style={styles.Icon} size={20} color="#FAC858" />
          </View>
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >العناوين</Text>
            <Icon name="map-pin" style={styles.Icon} size={20} color="#FAC858" />
          </View>
         </TouchableOpacity>

         <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >سياسه الضمان</Text>
            <Icon name="unlock-alt" style={styles.Icon} size={20} color="#FAC858" />
          </View>
         </TouchableOpacity>
         <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >الشروط والاحكام</Text>
            <Icon name="calendar-exclamation"style={styles.Icon} size={20} color="#FAC858" />
          </View>
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >عن التطبيق</Text>
            <Icon name="question" style={styles.Icon} size={20} color="#FAC858" />
          </View>
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >الاعدادات</Text>
            <Icon name="cog" style={styles.Icon} size={20} color="#FAC858" />
          </View>
          </TouchableOpacity>

          <TouchableOpacity >
          <View style={styles.textCont}>
            <Text style={styles.textCont2} >شارك التطبيق</Text>
            <Icon name="share-alt" style={styles.Icon} size={20} color="#FAC858" />
          </View>
        </TouchableOpacity>
        
        <MainButton >  تسجيل الخروج </MainButton>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container:
  {
    backgroundColor: '#fff',
    flex: 1,

  },
  mylogo:
  {
    backgroundColor: '#E6E6E6',
    borderBottomWidth: 3,
    borderBottomColor: '#FAC858'

  },
  logoImg:
  {
    marginLeft: 110
  },
  textCont:
  {
    flexDirection: 'row',
    paddingLeft: 200,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#848484',
  },
  textCont2:
  {
    fontSize: 12,
    color: '#848484',
    marginBottom: 10,
    marginTop: 5,
    marginRight: 10
  },
 

});

export default Menu;