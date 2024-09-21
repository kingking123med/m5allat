import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import * as Animatable from "react-native-animatable";
  import {TailwindProvider} from "tailwindcss-react-native"
  import { useNavigation } from "@react-navigation/native";
  import hero from "../assets/images/hero.png";
  import HomePage from "../screens/HomePage" 

  const HeroImage = Image.resolveAssetSource(hero).uri;

  const WelcomeScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
        <TailwindProvider>
            <SafeAreaView className="bg-white flex-1 relative">
                {/* First Section */}
        
                <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#1775d2] text-3xl font-semibold">Go</Text>
                </View>
        
                <Text className="text-[#2A2B4B] text-3xl font-semibold">Ma Ville</Text>
                </View>
        
                {/* Second Section */}
                <View className="px-6 mt-5 space-y-3">
                <Text className="text-[#3C6072] text-[28px]">Enjoy the trip in</Text>
                <Text className="text-[#1775d2] text-[24px] font-bold">
                    Monastir City
                </Text>
        
                <Text className="text-[#3C6072] text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
                    quis nostrum
                </Text>
                </View>
        
                {/* Circle Section */}
                <View className="w-[250px] h-[250px] bg-[#1775d2] rounded-full absolute bottom-36 -right-36"></View>
                <View className="w-[250px] h-[250px] bg-[#E99265] rounded-full absolute -bottom-28 -left-16"></View>
        
                {/* Image container */}
                <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={{uri:HeroImage}}
                    className="w-full h-full object-cover mt-16"
                />
        
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomePage")}
                    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#1775d2] rounded-full items-center justify-center"
                >
                    <Animatable.View
                    animation={"pulse"}
                    easing="ease-in-out"
                    iterationCount={"infinite"}
                    className="w-20 h-20 items-center justify-center rounded-full bg-[#1775d2]"
                    >
                    <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                    </Animatable.View>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
      </TailwindProvider>
    );
  };
  
  export default WelcomeScreen;