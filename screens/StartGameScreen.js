import { TextInput, Button, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputNumberHandler = (enteredNum) => setEnteredNumber(enteredNum);

  const resetInputHandler = () => setEnteredNumber("");

  const confirmInputValue = () => {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number~!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    console.log("Valid Number");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="false"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={inputNumberHandler}
      />
      <View style={styles.inputButtons}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputValue}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 90,
    padding: 18,
    backgroundColor: "#72063c",
    marginHorizontal: 20,
    borderRadius: 9,
    elevation: 5,
  },
  input: {
    height: 50,
    fontSize: 36,
    width: 50,
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    color: "yellow",
    marginVertical: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputButtons: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
