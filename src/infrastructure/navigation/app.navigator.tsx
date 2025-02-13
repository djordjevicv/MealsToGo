import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { RestaurantsScreen } from "../../features/restaurant/screens/restaurants.screen";
import { Settings } from "../../features/settings/screens/settings.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-outline",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => {
  const iconName: any = TAB_ICON[route.name as keyof typeof TAB_ICON];
  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <Ionicons name={iconName} size={20} color={color} />
    ),
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
