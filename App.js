import { Navigation } from "react-native-navigation";
import loginScreen from './src/screens/login';
import homeScreen from './src/screens/homePage';
import SideDrawer from './src/screens/Menu';




Navigation.registerComponent("loginScreen", () => loginScreen);
Navigation.registerComponent("homeScreen", () => homeScreen);
Navigation.registerComponent("SideDrawer", () => SideDrawer);

Navigation.setRoot({
  root: {
        stack: {
          children: [{
            component: {
              name: 'loginScreen',
              passProps: {
                text: 'login'
              },
            },
          }],
          options: {
            topBar: {
              visible:false
            }
          }
        }
      }
});