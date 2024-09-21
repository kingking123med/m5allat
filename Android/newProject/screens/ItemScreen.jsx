import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect ,useState } from "react";
  import { useRoute } from '@react-navigation/native';
  import { NavigationContainer,useNavigation, } from '@react-navigation/native';
  import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
  import sidib from "../assets/images/list/cafe-resto/sidibou.jpg" 
  import {CircleButton, RectButton} from "../components/Button"

  const ItemScreen = ({ navigation, }) => {

    const nav = useNavigation();
    const route = useRoute();
    const { title ,imageUrl ,price, genre  , rating  } = route.params;

    const [like,setLike]= useState(null);
    const onSubmit = () => {
      setLike(!like)
    };
    if(route.params.title) {console.log(route) } else {console.log(route)};

    return (
      <SafeAreaView className="flex-1 bg-white relative" >
        <ScrollView className="flex-1 px-4 py-1" >
          <View className="relative bg-white shadow-lg">
            <Image
              source={{ uri:imageUrl
              }}
              className="w-full h-72 object-cover rounded-2xl"
            />
  
            <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="w-10 h-10 rounded-md items-center justify-center bg-white"
              >
                <FontAwesome5 name="chevron-left" size={24} color="#1775d2" />
              </TouchableOpacity>
  
              <CircleButton name={like ? "heart" : "heart-o"} size={24} right={15} top={15} handlePress ={onSubmit} />

            </View>
  
            <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
              <View className="flex-row space-x-2 items-center">
                <Text className="text-[12px] font-bold text-gray-100">
                  $$
                </Text>
                <Text className="text-[22px] font-bold text-gray-100">
                {price}/person
                </Text>
              </View>

            </View>
          </View>
  
          <View className="mt-6">
            <Text className="text-[#1775d2] text-[21px] font-bold">
                {title}
            </Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <FontAwesome name="map-marker" size={25} color="gray" />
              <Text style={{color:"gray"}} className=" text-[16px] ">
                 Monastir city
              </Text>
            </View>
          </View>
  
          <View className="mt-4 flex-row items-center justify-between">
            
              <View className=" flex-row items-center space-x-2">
                <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome name="star" size={20} color="#D58574" />
                </View>
                <View>
                  <Text className="text-[#1775d2]">{rating}</Text>
                  <Text className="text-[#1775d2]">Ratings</Text>
                </View>
              </View>
            
  
            
              <View className=" flex-row items-center space-x-2">
                <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <MaterialIcons name="attach-money" size={20} color="black" />
                </View>
                <View>
                  <Text className="text-[#1775d2]">$$</Text>
                  <Text className="text-[#1775d2]">Price Level</Text>
                </View>
              </View>
            
  
            
              <View className=" flex-row items-center space-x-2">
                <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                  <FontAwesome5 name="map-signs" size={20} color="black" />
                </View>
                <View>
                  <Text className="text-[#1775d2] capitalize">
                    North West
                  </Text>
                  <Text className="text-[#1775d2]">Bearing</Text>
                </View>
              </View>
            
          </View>
  
          
            <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio quis nostrum Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
                    quis nostrum
            </Text>
          
  
          
            <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
              
                <TouchableOpacity className="px-2 py-1 rounded-md bg-emerald-100"
                >
                  <Text>{genre}</Text>
                </TouchableOpacity>
              
            </View>
          
  
          <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
            
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="phone" size={24} color="#1775d2" />
                <Text className="text-lg">+987654321</Text>
              </View>
            
            
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="envelope" size={24} color="#1775d2" />
                <Text className="text-lg">Monastir@email.tn</Text>
              </View>
            
            
              <View className="items-center flex-row space-x-6">
                <FontAwesome name="map-pin" size={24} color="#1775d2" />
                <Text className="text-lg">QRJM+99J Monastir</Text>
              </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ItemScreen;