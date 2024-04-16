import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "styled-components/native";
import { House, Tag, SignOut } from "phosphor-react-native";

import { Home } from "../screens/Home";
import { Announcement } from "../screens/Announcement";
import { NewAnnouncement } from "../screens/NewAnnouncement";

import { TouchableOpacity } from "react-native";

import { useAuth } from "../hooks/useAuth";

type AppRoutes = {
  home: undefined;
  announcement: undefined;
  newAnnouncement: undefined;
  signOut: () => null;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();
const Stack = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeTabs} />
      <Stack.Screen name="newAnnouncement" component={NewAnnouncement} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  const { COLORS } = useTheme();
  const { signOut } = useAuth();

  async function handleLogout() {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.gray_2,
        tabBarInactiveTintColor: COLORS.gray_4,
        tabBarStyle: {
          alignContent: "center",
          justifyContent: "center",
          height: 78,
          backgroundColor: COLORS.gray_7,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <House
              color={color}
              size={32}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Screen
        name="announcement"
        component={Announcement}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Tag
              color={color}
              size={32}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Screen
        name="signOut"
        component={SignOutScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={handleLogout}>
              <SignOut color={COLORS.red_light} size={32} />
            </TouchableOpacity>
          ),
        }}
      />
    </Navigator>
  );
}

function SignOutScreen() {
  return null;
}
