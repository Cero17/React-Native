import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground, ImageStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      colors={["#790252", "#F0E161", "#553939"]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/unsplash.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImg}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.2,
  },
});
