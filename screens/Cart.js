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

const FirstRoute = () => 
  <Flex direction="row" justifyContent="space-between" px="5" mt="5">
    <View style={styles.icon}>
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14 9.0602C11.2744 9.0602 9.06018 11.2744 9.06018 14C9.06018 16.7256 11.2744 18.9398 14 18.9398C16.7256 18.9398 18.9398 16.7256 18.9398 14C18.9398 11.2744 16.7256 9.0602 14 9.0602ZM14 16.9639C12.3669 16.9639 11.0361 15.633 11.0361 14C11.0361 12.367 12.3669 11.0361 14 11.0361C15.633 11.0361 16.9639 12.367 16.9639 14C16.9639 15.633 15.633 16.9639 14 16.9639Z" fill="#B7B7B7"/>
<Path d="M27.012 10.2806C27.5583 10.2806 28 9.83894 28 9.29265C28 8.74637 27.5583 8.30469 27.012 8.30469H24.6932V6.60191C24.6932 4.77709 23.2287 3.30677 21.3981 3.30677H19.6953V0.987962C19.6953 0.441677 19.2536 0 18.7073 0C18.1611 0 17.7194 0.441677 17.7194 0.987962V3.30677H10.2806V0.987962C10.2806 0.441677 9.83894 0 9.29265 0C8.74637 0 8.30469 0.441677 8.30469 0.987962V3.30677H6.60191C4.77127 3.30677 3.30677 4.77127 3.30677 6.60191V8.30469H0.987962C0.441677 8.30469 0 8.74637 0 9.29265C0 9.83894 0.441677 10.2806 0.987962 10.2806H3.30677V17.7194H0.987962C0.441677 17.7194 0 18.1611 0 18.7073C0 19.2536 0.441677 19.6953 0.987962 19.6953H3.30677V21.3981C3.30677 23.2229 4.77127 24.6932 6.60191 24.6932H8.30469V27.012C8.30469 27.5583 8.74637 28 9.29265 28C9.83894 28 10.2806 27.5583 10.2806 27.012V24.6932H17.7194V27.012C17.7194 27.5583 18.1611 28 18.7073 28C19.2536 28 19.6953 27.5583 19.6953 27.012V24.6932H21.3981C23.2229 24.6932 24.6932 23.2287 24.6932 21.3981V19.6953H27.012C27.5583 19.6953 28 19.2536 28 18.7073C28 18.1611 27.5583 17.7194 27.012 17.7194H24.6932V10.2806H27.012ZM22.7754 21.4388C22.7754 22.1768 22.1768 22.7754 21.4388 22.7754H6.61934C5.88128 22.7754 5.28269 22.1768 5.28269 21.4388V6.61934C5.28269 5.88128 5.88128 5.28269 6.61934 5.28269H21.4388C22.1768 5.28269 22.7754 5.88128 22.7754 6.61934V21.4388Z" fill="#B7B7B7"/>
</Svg>
<Text style={styles.shopText}>Exynos 990</Text>
    </View>
<View style={styles.icon}>
<Svg width="28" height="28" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14 7.00002C13.0111 7.00002 12.0444 7.29327 11.2221 7.84267C10.3999 8.39208 9.75904 9.17297 9.3806 10.0866C9.00216 11.0002 8.90315 12.0056 9.09607 12.9755C9.289 13.9454 9.7652 14.8363 10.4645 15.5356C11.1637 16.2348 12.0546 16.711 13.0245 16.9039C13.9945 17.0969 14.9998 16.9979 15.9134 16.6194C16.827 16.241 17.6079 15.6001 18.1573 14.7779C18.7068 13.9556 19 12.9889 19 12C19 10.6739 18.4732 9.40217 17.5355 8.46449C16.5979 7.52681 15.3261 7.00002 14 7.00002ZM14 15C13.4067 15 12.8266 14.8241 12.3333 14.4944C11.8399 14.1648 11.4554 13.6963 11.2284 13.1481C11.0013 12.5999 10.9419 11.9967 11.0576 11.4148C11.1734 10.8328 11.4591 10.2983 11.8787 9.8787C12.2982 9.45914 12.8328 9.17342 13.4147 9.05767C13.9967 8.94191 14.5999 9.00132 15.1481 9.22838C15.6962 9.45545 16.1648 9.83996 16.4944 10.3333C16.8241 10.8267 17 11.4067 17 12C17 12.7957 16.6839 13.5587 16.1213 14.1213C15.5587 14.684 14.7956 15 14 15ZM25 3.00002H19.72L19.4 2.00002C19.1926 1.41325 18.8077 0.905525 18.2989 0.547183C17.7901 0.18884 17.1824 -0.0023769 16.56 2.23036e-05H11.44C10.8115 0.00119801 10.1993 0.199705 9.68977 0.567528C9.1802 0.93535 8.79901 1.45391 8.6 2.05002L8.28 3.05002H3C2.20435 3.05002 1.44129 3.36609 0.87868 3.9287C0.316071 4.49131 0 5.25437 0 6.05002V19C0 19.7957 0.316071 20.5587 0.87868 21.1213C1.44129 21.684 2.20435 22 3 22H25C25.7956 22 26.5587 21.684 27.1213 21.1213C27.6839 20.5587 28 19.7957 28 19V6.00002C28 5.20437 27.6839 4.44131 27.1213 3.8787C26.5587 3.31609 25.7956 3.00002 25 3.00002ZM26 19C26 19.2652 25.8946 19.5196 25.7071 19.7071C25.5196 19.8947 25.2652 20 25 20H3C2.73478 20 2.48043 19.8947 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6.00002C2 5.73481 2.10536 5.48045 2.29289 5.29292C2.48043 5.10538 2.73478 5.00002 3 5.00002H9C9.21807 5.0114 9.43386 4.9511 9.61443 4.82831C9.795 4.70552 9.93042 4.527 10 4.32002L10.54 2.68002C10.6042 2.48928 10.7244 2.32233 10.885 2.20101C11.0455 2.07969 11.239 2.00964 11.44 2.00002H16.56C16.7781 1.98864 16.9939 2.04895 17.1744 2.17174C17.355 2.29452 17.4904 2.47304 17.56 2.68002L18.1 4.32002C18.1642 4.51077 18.2844 4.67771 18.445 4.79903C18.6055 4.92035 18.799 4.9904 19 5.00002H25C25.2652 5.00002 25.5196 5.10538 25.7071 5.29292C25.8946 5.48045 26 5.73481 26 6.00002V19Z" fill="#B7B7B7"/>
</Svg>
<Text style={styles.shopText}>108 + 12 mp</Text>
</View>

<View style={styles.icon}>

<Svg width="28" height="28" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14 7.00002C13.0111 7.00002 12.0444 7.29327 11.2221 7.84267C10.3999 8.39208 9.75904 9.17297 9.3806 10.0866C9.00216 11.0002 8.90315 12.0056 9.09607 12.9755C9.289 13.9454 9.7652 14.8363 10.4645 15.5356C11.1637 16.2348 12.0546 16.711 13.0245 16.9039C13.9945 17.0969 14.9998 16.9979 15.9134 16.6194C16.827 16.241 17.6079 15.6001 18.1573 14.7779C18.7068 13.9556 19 12.9889 19 12C19 10.6739 18.4732 9.40217 17.5355 8.46449C16.5979 7.52681 15.3261 7.00002 14 7.00002ZM14 15C13.4067 15 12.8266 14.8241 12.3333 14.4944C11.8399 14.1648 11.4554 13.6963 11.2284 13.1481C11.0013 12.5999 10.9419 11.9967 11.0576 11.4148C11.1734 10.8328 11.4591 10.2983 11.8787 9.8787C12.2982 9.45914 12.8328 9.17342 13.4147 9.05767C13.9967 8.94191 14.5999 9.00132 15.1481 9.22838C15.6962 9.45545 16.1648 9.83996 16.4944 10.3333C16.8241 10.8267 17 11.4067 17 12C17 12.7957 16.6839 13.5587 16.1213 14.1213C15.5587 14.684 14.7956 15 14 15ZM25 3.00002H19.72L19.4 2.00002C19.1926 1.41325 18.8077 0.905525 18.2989 0.547183C17.7901 0.18884 17.1824 -0.0023769 16.56 2.23036e-05H11.44C10.8115 0.00119801 10.1993 0.199705 9.68977 0.567528C9.1802 0.93535 8.79901 1.45391 8.6 2.05002L8.28 3.05002H3C2.20435 3.05002 1.44129 3.36609 0.87868 3.9287C0.316071 4.49131 0 5.25437 0 6.05002V19C0 19.7957 0.316071 20.5587 0.87868 21.1213C1.44129 21.684 2.20435 22 3 22H25C25.7956 22 26.5587 21.684 27.1213 21.1213C27.6839 20.5587 28 19.7957 28 19V6.00002C28 5.20437 27.6839 4.44131 27.1213 3.8787C26.5587 3.31609 25.7956 3.00002 25 3.00002ZM26 19C26 19.2652 25.8946 19.5196 25.7071 19.7071C25.5196 19.8947 25.2652 20 25 20H3C2.73478 20 2.48043 19.8947 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6.00002C2 5.73481 2.10536 5.48045 2.29289 5.29292C2.48043 5.10538 2.73478 5.00002 3 5.00002H9C9.21807 5.0114 9.43386 4.9511 9.61443 4.82831C9.795 4.70552 9.93042 4.527 10 4.32002L10.54 2.68002C10.6042 2.48928 10.7244 2.32233 10.885 2.20101C11.0455 2.07969 11.239 2.00964 11.44 2.00002H16.56C16.7781 1.98864 16.9939 2.04895 17.1744 2.17174C17.355 2.29452 17.4904 2.47304 17.56 2.68002L18.1 4.32002C18.1642 4.51077 18.2844 4.67771 18.445 4.79903C18.6055 4.92035 18.799 4.9904 19 5.00002H25C25.2652 5.00002 25.5196 5.10538 25.7071 5.29292C25.8946 5.48045 26 5.73481 26 6.00002V19Z" fill="#B7B7B7"/>
</Svg>
<Text style={styles.shopText}>8 GB
</Text>
</View>

<View style={styles.icon}>
<Svg width="28" height="28" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M17.2857 0H5.23608C5.16316 0.00210347 5.09048 0.00937644 5.01859 0.0217642C4.88813 0.000522292 4.75439 0.0131126 4.63018 0.0583308C4.50598 0.103549 4.39545 0.179882 4.30917 0.280029L4.2031 0.406371C4.16012 0.443221 4.11565 0.4741 4.07401 0.516371L2.36751 2.59152L0.184171 5.19074C0.112275 5.2778 0.0603103 5.37954 0.0319276 5.48883C0.00354485 5.59811 -0.000567681 5.71228 0.0198786 5.82332C0.00897307 5.88898 0.00233295 5.95528 0 6.02179V20.4286C0.000478291 20.8452 0.166193 21.2446 0.460789 21.5392C0.755385 21.8338 1.15481 21.9995 1.57143 22H17.2857C17.7023 21.9995 18.1018 21.8338 18.3964 21.5392C18.691 21.2446 18.8567 20.8452 18.8571 20.4286V1.57143C18.8567 1.15481 18.691 0.755385 18.3964 0.460789C18.1018 0.166193 17.7023 0.000478291 17.2857 0ZM17.2857 20.4286H1.57143L1.62242 5.96577L3.32891 3.89062L5.27701 1.57143L17.2857 1.57064V20.4286Z" fill="#B7B7B7"/>
<Path d="M14.9285 7.07142C15.1369 7.07142 15.3368 6.98864 15.4841 6.84129C15.6315 6.69394 15.7143 6.49409 15.7143 6.28571V3.92857C15.7143 3.72018 15.6315 3.52033 15.4841 3.37298C15.3368 3.22563 15.1369 3.14285 14.9285 3.14285C14.7202 3.14285 14.5203 3.22563 14.373 3.37298C14.2256 3.52033 14.1428 3.72018 14.1428 3.92857V6.28571C14.1428 6.49409 14.2256 6.69394 14.373 6.84129C14.5203 6.98864 14.7202 7.07142 14.9285 7.07142Z" fill="#B7B7B7"/>
<Path d="M11.7857 7.07142C11.9941 7.07142 12.1939 6.98864 12.3413 6.84129C12.4886 6.69394 12.5714 6.49409 12.5714 6.28571V3.92857C12.5714 3.72018 12.4886 3.52033 12.3413 3.37298C12.1939 3.22563 11.9941 3.14285 11.7857 3.14285C11.5773 3.14285 11.3775 3.22563 11.2301 3.37298C11.0828 3.52033 11 3.72018 11 3.92857V6.28571C11 6.49409 11.0828 6.69394 11.2301 6.84129C11.3775 6.98864 11.5773 7.07142 11.7857 7.07142Z" fill="#B7B7B7"/>
<Path d="M8.64289 7.07142C8.85128 7.07142 9.05113 6.98864 9.19848 6.84129C9.34583 6.69394 9.42861 6.49409 9.42861 6.28571V3.92857C9.42861 3.72018 9.34583 3.52033 9.19848 3.37298C9.05113 3.22563 8.85128 3.14285 8.64289 3.14285C8.43451 3.14285 8.23466 3.22563 8.08731 3.37298C7.93996 3.52033 7.85718 3.72018 7.85718 3.92857V6.28571C7.85718 6.49409 7.93996 6.69394 8.08731 6.84129C8.23466 6.98864 8.43451 7.07142 8.64289 7.07142Z" fill="#B7B7B7"/>
<Path d="M4.71436 3.92857V6.28571C4.71436 6.49409 4.79714 6.69394 4.94449 6.84129C5.09184 6.98864 5.29169 7.07142 5.50007 7.07142C5.70845 7.07142 5.9083 6.98864 6.05565 6.84129C6.203 6.69394 6.28578 6.49409 6.28578 6.28571V3.92857C6.28578 3.72018 6.203 3.52033 6.05565 3.37298C5.9083 3.22563 5.70845 3.14285 5.50007 3.14285C5.29169 3.14285 5.09184 3.22563 4.94449 3.37298C4.79714 3.52033 4.71436 3.72018 4.71436 3.92857Z" fill="#B7B7B7"/>
</Svg>
<Text style={styles.shopText}>256 GB</Text>
</View>

</Flex>

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
  icon:{
alignItems: "center"
  },
  shopText:{
    textAlign: "center",
    color:"#B7B7B7",
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  }
});
