import { Navigation } from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const startTabs = () => {
    Promise.all([
        MaterialIcons.getImageSource('menu', 25,'#FAC858'),
      ]).then(([ menuIcon]) => {

    Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        options: {
                            topBar:{
                                rightButtons:[
                                    {
                                        id: 'sideMenu',
                                        icon: menuIcon,
                                    }
                                ],
                                background: {
                                    color: '#000',
                                  }
                            }
                        },
                        children: [{
                            component: {
                                name: 'homeScreen'
                            }
                        }]
                    }
                },
                right: {
                    component: {
                        name: "SideDrawer"
                    }
                },
                
            }
        }
    });
});
}
export default startTabs;