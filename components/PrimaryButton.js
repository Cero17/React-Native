import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = (props) => {
  //const pressHandler = () => console.log("Button Pressed");
  return (
    <View style={styles.buttonContainer1}>
      <Pressable
        style={styles.buttonContainer2}
        onPress={props.onPress}
        android_ripple={{ color: "#E80F88" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer1: {
    borderRadius: 14,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer2: {
    backgroundColor: "#AF0171",
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default PrimaryButton;
