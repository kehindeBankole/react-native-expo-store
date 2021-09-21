import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Box, Center, NativeBaseProvider } from "native-base"
export default function Landing({navigation}) {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return <Text>loading</Text>;
  }else{
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logoText}
          />
        </View>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Product")}
        >
          <Text style={styles.nextButtonText}>next</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "#010035",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logo: {
    width: 132,
    height: 132,
    borderRadius: 100,
    backgroundColor: "#FF6E4E",
    position: "relative",
  },
  logoText: {
    position: "absolute",
    top: 38,
    left: 38,
  },
  nextButton: {
    backgroundColor: "#FF6E4E",
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    top: Dimensions.get("screen").height - 150,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontFamily: "Inter_900Black",
    fontSize: 16,
    textTransform: "capitalize",
  },
});
