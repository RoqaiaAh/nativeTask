import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Button, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import { Navigation } from 'react-native-navigation';
import asstesGroup from '../../assets/Home-repair.png';



const SCREEN_WIDTH = Dimensions.get('window').width;

export default class homePage extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    const fakeData = [];
    for (i = 0; i < 10; i += 1) {
      fakeData.push({
        type: 'NORMAL',
        item: {
          id: i,
          image: faker.image.avatar(),
          name: faker.name.firstName(),
          description: faker.random.words(5),
        },
      });
    }
   
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      return this.state.list.getDataForIndex(i).type;
    }, (type, dim) => {
      switch (type) {
        case 'NORMAL':
          dim.width = SCREEN_WIDTH;
          dim.height = 100;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
          break;
      };
    })


  }
  
  navigationButtonPressed = ({ buttonId }) => {
    const { componentId } = this.props;

    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(componentId, {
        sideMenu: {
          right: {
            visible: true,
          },
        },
      });
    }
  }



  rowRenderer = (type, data) => {
    const { image, name , description} = data.item;
    return (

      <View style={styles.listItem}>
        <View >
          <Button color="#FCC759" style ={styles.button} title="حجز" />
        </View>
        <View style={styles.body}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
         
          <TouchableOpacity>
            <Text style={styles.myText}>التفاصيل</Text>
          </TouchableOpacity>

        </View>
        <Image style={styles.image} source={{ uri: image }} />
        
      </View>

    )
  }

  render() {

    return (

      <View style={styles.container}>
        
        <ImageBackground source={asstesGroup} style={{ height: 70 }} >
        <View style={styles.secondBar}>
            <View style={styles.myBt}>
              <Button color="#FAC858" title="اليوم" />
              <Button color="#FAC858" title="المهندسين" />
              <Button color="#FAC858" title="كل الخدمات" />
            </View>
            </View>

        </ImageBackground >
       
        <RecyclerListView
          style={{ flex: 1 }}
          layoutProvider={this.layoutProvider}

          dataProvider={this.state.list}

          rowRenderer={this.rowRenderer}
        />
      </View >

    );

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 1,
    minWidth: 1,
  },
  body: {
    flex: 1,
    marginLeft: 20,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),

  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 130,
  },

  listItem: {
    flexDirection: 'row',
    margin: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  myText:
  {
    color: '#FAC858',
    textDecorationLine: 'underline',
    marginRight: 10,
    marginBottom: 10
  },
  secondBar:
  {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex:1
  },
  myBt:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:30,
    marginLeft:170,
    marginTop:20,
    borderRadius:4
  },
  button:
  {
    flex:1,
    
  },
});