import { createStaticNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});
const Navigation = createStaticNavigation(Drawer);
export default function StaticDrawerNavigator() {
  return <Navigation />;
}
