import { Navigation } from "react-native-navigation";
import App from "./App";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.showModal({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen",
      }
    }
    
  });
});