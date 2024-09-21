import React from "react";
import { TouchableOpacity, View, SafeAreaView,Text, ScrollView,Image,Icon } from "react-native";
import { Ionicons,AntDesign,Octicons } from '@expo/vector-icons';
import { NavigationContainer,useNavigation } from '@react-navigation/native';

import PlacesCard from "./palcesCard";

import elgrotte from '../assets/Home/elgrotte.jpg';
import costa from '../assets/Home/Costa.jpg';
import Farik from '../assets/Home/Farik.jpg';
import Loft from '../assets/Home/Loft.jpg';
import Pirate from '../assets/Home/Pirate.jpg';
import ribat from '../assets/Home/ribat.jpg';
import Viking from '../assets/Home/Viking.jpg';
import sidibou from '../assets/Home/sidibou.jpg';
import Cap from '../assets/Home/Cap.jpg';

const elgrotteUri = Image.resolveAssetSource(elgrotte).uri;
const sidibouUri = Image.resolveAssetSource(sidibou).uri;
const ribatUri = Image.resolveAssetSource(ribat).uri;

const FeaturedRow = ({ title, description ,id ,items}) => {

    const nav = useNavigation();

  return (
    <SafeAreaView style={{marginTop:10}}>
        <View style={{flexDirection : "row", justifyContent :"space-between"}}>
            <Text style={{fontSize : 18 , fontWeight:"bold"}} >{title}</Text>
            <TouchableOpacity><Octicons name="arrow-right" size={22} color ={"gray"} onPress={() => nav.navigate("Categories")}/></TouchableOpacity>
        </View>

        <Text style={{color :"gray", fontSize:13}} >{description}</Text>
        <View>
            <ScrollView horizontal  contentContainerStyle={{    paddingHorizontal:15,   }}  showsHorizontalScrollIndicator={false} >

            {items.map((category,id) => (
                <PlacesCard key={id} 
                title={category.title} 
                imageUrl={category.icon} 
                price={category.price} 
                desc_short="éqdfq"  
                genre={category.genre} 
                adress="hdr" 
                rating={category.rating} 
                lat="sdf"  
                
              />
            ))}

            </ScrollView>
        </View>
        
    </SafeAreaView>

 )
}
export default FeaturedRow;