import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Animated,
  Pressable,
} from "react-native";
import Svg, { Circle, Rect, Path, Line } from "react-native-svg";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  Button,
  Actionsheet,
  useDisclose,
  Flex,
  Select,
  CheckIcon,
  Box,
  Center,
} from "native-base";
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants';

const FirstRoute = () => <Center flex={1}>This is Tab 1</Center>;

const SecondRoute = () => <Center flex={1}>This is Tab 2</Center>;

const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function Cart({ navigation, route }) {
  const { id } = route.params;
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  async function getProduct() {
    let g = await fetch(`https://fakestoreapi.com/products/${id}`);
    let f = await g.json();
    setProduct(f);
    setLoading(false);
    console.log(f);
  }
  React.useEffect(() => {
    getProduct();
  }, []);
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Shop' },
    { key: 'second', title: 'Details' },
    { key: 'third', title: 'Features' },
  ]);


  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#010035' : 'rgba(0, 0, 0, 0.5)';
          const borderColor = index === i ? '#FF6E4E' : 'coolGray.200';
          const fontFamily = index === i ? 'Inter_700Bold' : 'Inter_400Regular';
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text style={{color ,  fontSize:20,fontFamily}}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  if (!fontsLoaded) {
    return <Text>loading</Text>;
  } else {
    if (loading === false) {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Flex
              direction="row"
              px="5"
              justifyContent="space-between"
              style={{ width: "100%" }}
            >
              <Button
                style={styles.closeSheet}
                onPress={() => navigation.navigate("Product")}
              >
                <Svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M8 15L1 8L8 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </Button>
              <Text style={styles.filterOptions}>Product Details</Text>
              <Button
                style={styles.doneSheet}
                onPress={() => console.log(route)}
              >
                <Svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M16.704 6.01488C16.6187 5.22703 16.2405 4.49999 15.6445 3.97782C15.0484 3.45566 14.2779 3.17648 13.4857 3.19561H12.5717C12.4149 2.30053 11.9475 1.48941 11.2517 0.904918C10.5559 0.320427 9.67628 0 8.76758 0C7.85887 0 6.97926 0.320427 6.28348 0.904918C5.58769 1.48941 5.12029 2.30053 4.96349 3.19561H4.03661C3.24439 3.17648 2.4739 3.45566 1.87782 3.97782C1.28174 4.49999 0.903574 5.22703 0.818266 6.01488L0.0136801 14.6143C-0.0266528 15.0361 0.022441 15.4616 0.157755 15.8631C0.293069 16.2646 0.51156 16.6331 0.798956 16.9444C1.10731 17.2783 1.48164 17.5445 1.89824 17.7262C2.31485 17.9079 2.76464 18.0012 3.21915 18H14.316C14.7705 18.0012 15.2203 17.9079 15.6369 17.7262C16.0535 17.5445 16.4278 17.2783 16.7362 16.9444C17.0236 16.6331 17.2421 16.2646 17.3774 15.8631C17.5127 15.4616 17.5618 15.0361 17.5215 14.6143L16.704 6.01488ZM8.76758 1.2646C9.33694 1.26645 9.88963 1.45697 10.3392 1.80637C10.7887 2.15576 11.1098 2.64432 11.2521 3.19561H6.28301C6.42535 2.64432 6.74641 2.15576 7.19597 1.80637C7.64552 1.45697 8.19821 1.26645 8.76758 1.2646ZM15.7836 16.069C15.5975 16.2728 15.3707 16.4354 15.118 16.5463C14.8652 16.6571 14.592 16.7138 14.316 16.7127H3.21915C2.94314 16.7138 2.66996 16.6571 2.41719 16.5463C2.16443 16.4354 1.93769 16.2728 1.75159 16.069C1.58545 15.8906 1.45886 15.6791 1.38011 15.4484C1.30136 15.2177 1.27221 14.9729 1.29458 14.7302L2.11848 6.13717C2.17162 5.67077 2.39855 5.24151 2.75403 4.93493C3.10952 4.62836 3.56746 4.46698 4.03661 4.48294H4.90556V5.77028C4.90556 5.94099 4.97338 6.10471 5.09409 6.22542C5.2148 6.34614 5.37852 6.41395 5.54923 6.41395C5.71994 6.41395 5.88366 6.34614 6.00437 6.22542C6.12509 6.10471 6.1929 5.94099 6.1929 5.77028V4.48294H11.3423V5.77028C11.3423 5.94099 11.4101 6.10471 11.5308 6.22542C11.6515 6.34614 11.8152 6.41395 11.9859 6.41395C12.1566 6.41395 12.3204 6.34614 12.4411 6.22542C12.5618 6.10471 12.6296 5.94099 12.6296 5.77028V4.48294H13.4985C13.9699 4.46366 14.431 4.62354 14.7893 4.93043C15.1475 5.23732 15.3763 5.66847 15.4295 6.13717L16.2534 14.7366C16.2732 14.9792 16.2416 15.2233 16.1606 15.4529C16.0796 15.6825 15.9512 15.8924 15.7836 16.069Z"
                    fill="white"
                  />
                </Svg>
              </Button>
            </Flex>
            <Flex></Flex>
            <ScrollView
              horizontal={true}
              snapToAlignment="center"
              snapToInterval={236}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <Box bg="primary.500" mt="37" mr="2" style={styles.imageBox}>
                <Center>
                  <Image
                    style={{ width: 166, height: 159, marginTop: 5 }}
                    source={{ uri: product.image }}
                  />
                </Center>
              </Box>
              <Box bg="primary.500" mt="37" mr="2" style={styles.imageBox}>
                <Center>
                  <Image
                    style={{ width: 166, height: 159, marginTop: 5 }}
                    source={{ uri: product.image }}
                  />
                </Center>
              </Box>
              <Box bg="primary.500" mt="37" mr="2" style={styles.imageBox}>
                <Center>
                  <Image
                    style={{ width: 166, height: 159, marginTop: 5 }}
                    source={{ uri: product.image }}
                  />
                </Center>
              </Box>
            </ScrollView>
            {/* <FlatList
          data={[1, 2, 3]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={() => (
            <Box bg="primary.500" mt="37" mr="2" style={styles.imageBox}>
             <Center>
             <Text>This is a Box</Text>
             </Center>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        /> */}
          </View>

          <View style={styles.detailsBox}>
            <Flex
              direction="row"
              justifyContent="space-between"
              style={{ width: "100%", marginTop: 28, paddingHorizontal: 28 }}
            >
              <View>
                <Text numberOfLines={1} ellipsizeMode='tail'style={{ ...styles.filterOptions ,width:244}}>
                  {product.title}
                </Text>
                <Flex direction="row" mt={3}>
                  <Svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                      fill="#FFB800"
                    />
                  </Svg>
                  <Svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                      fill="#FFB800"
                    />
                  </Svg>
                  <Svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                      fill="#FFB800"
                    />
                  </Svg>
                  <Svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                      fill="#FFB800"
                    />
                  </Svg>
                  <Svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                      fill="#FFB800"
                    />
                  </Svg>
                </Flex>
              </View>

              <Button
                style={styles.closeSheet}
                onPress={() => navigation.navigate("Product")}
              >
                <Svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M9.5 17C9.22951 17 8.96873 16.9015 8.7655 16.7224C7.99794 16.0475 7.25793 15.4132 6.60503 14.8536L6.6017 14.8507C4.68752 13.2102 3.03456 11.7935 1.88446 10.3979C0.598824 8.83778 0 7.35852 0 5.74252C0 4.17244 0.535332 2.72395 1.50728 1.66367C2.49082 0.590857 3.84039 0 5.3078 0C6.40456 0 7.40897 0.348712 8.29308 1.03637C8.73926 1.38348 9.14369 1.80829 9.5 2.3038C9.85645 1.80829 10.2607 1.38348 10.7071 1.03637C11.5912 0.348712 12.5956 0 13.6923 0C15.1596 0 16.5093 0.590857 17.4929 1.66367C18.4648 2.72395 19 4.17244 19 5.74252C19 7.35852 18.4013 8.83778 17.1157 10.3978C15.9656 11.7935 14.3128 13.2101 12.3989 14.8504C11.7448 15.4108 11.0037 16.0461 10.2344 16.7227C10.0313 16.9015 9.77035 17 9.5 17ZM5.3078 1.11932C4.15495 1.11932 3.09588 1.58203 2.32542 2.42232C1.54352 3.2753 1.11285 4.45439 1.11285 5.74252C1.11285 7.10165 1.61513 8.31719 2.74131 9.68375C3.8298 11.0047 5.44884 12.3923 7.32345 13.9989L7.32693 14.0018C7.98228 14.5635 8.7252 15.2003 9.49841 15.8802C10.2763 15.199 11.0203 14.5612 11.677 13.9986C13.5514 12.392 15.1703 11.0047 16.2588 9.68375C17.3849 8.31719 17.8872 7.10165 17.8872 5.74252C17.8872 4.45439 17.4565 3.2753 16.6746 2.42232C15.9043 1.58203 14.8451 1.11932 13.6923 1.11932C12.8478 1.11932 12.0724 1.38931 11.3878 1.92171C10.7777 2.39637 10.3526 2.99642 10.1035 3.41627C9.97532 3.63217 9.74976 3.76105 9.5 3.76105C9.25024 3.76105 9.02468 3.63217 8.89654 3.41627C8.6475 2.99642 8.22248 2.39637 7.61221 1.92171C6.92757 1.38931 6.15218 1.11932 5.3078 1.11932Z"
                    fill="white"
                  />
                </Svg>
              </Button>
            </Flex>
            <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: 10 }}
      />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.loading}>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    marginTop: StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#E5E5E5",
    flex: 1,
  },
  loading: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    marginTop: StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#E5E5E5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  closeSheet: {
    backgroundColor: "#010035",
    width: 37,
    height: 37,
    borderRadius: 10,
  },
  doneSheet: {
    backgroundColor: "#FF6E4E",
    width: 37,
    height: 37,
    borderRadius: 10,
    //  marginLeft:30
  },
  doneSheetText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Inter_500Medium",
  },
  filterOptions: {
    color: "#010035",
    fontSize: 18,
    fontFamily: "Inter_500Medium",
    alignSelf: "center",
  },
  imageBox: {
    width: 266,
    height: 335,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  detailsBox: {
    flex: 0.6,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
