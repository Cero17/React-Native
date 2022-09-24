import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, ImageBackground, ImageStyle, SafeAreaView} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors"

export default function App() {


  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent300, Colors.primary700]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/images/unsplash.jpg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImg}
      >
      <SafeAreaView style={styles.firstScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  firstScreen: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.2,
  },
});
