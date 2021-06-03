import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The Recipe App is Start</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem modi
        aliquam quod repudiandae quia impedit assumenda quibusdam quidem
        expedita velit?
      </Text>
      {/* <Button>Learn More</Button> */}
      {/* <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
