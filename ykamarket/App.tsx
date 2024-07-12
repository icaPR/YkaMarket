import React from "react";
import { StatusBar } from "react-native";
import theme from "./src/theme";
import {
  Karla_400Regular,
  Karla_700Bold,
  Karla_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/karla";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
    Karla_800ExtraBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </ThemeProvider>
  );
}
