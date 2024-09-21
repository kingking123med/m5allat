import React,{useState} from "react";
import { NavigationContainer,useNavigation, } from '@react-navigation/native';
import { TouchableOpacity, View, SafeAreaView,Text, ScrollView,Image,Icon } from "react-native";
import { Ionicons,AntDesign,Octicons,Entypo,FontAwesome } from '@expo/vector-icons';
import {CircleButton, RectButton} from "../components/Button"
import heart from '../assets/icons/heart.png';

const heartUri = Image.resolveAssetSource(heart).uri;

const PalcesCard = ({ title ,imageUrl ,price, genre  , rating  }) => {
    const nav = useNavigation();
    const [like,setLike]= useState(null);
    const onSubmit = () => {
      setLike(!like)
    };

  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => nav.navigate("ItemScreen",{ title ,imageUrl,price,genre ,rating })}
        style={{backgroundColor:"white" ,shadowOpacity: 0.3, shadowRadius: 9.01,elevation: 8,padding:10,marginLeft:1,margin:7, borderRadius: 10}}>
            <Image 
              source={{
                 uri : imageUrl, 
              }} 
                style={{padding:15,borderRadius:10,width:235 ,height:144 , justifyContent:"flex-start"}} size={25} />
                <CircleButton name={like ? "heart" : "heart-o"}  right={10} top={10} handlePress ={onSubmit} />

                <View style={{ paddingRight:2, paddingLeft:2, paddingBottom:2}}>
                  <Text style={{fontWeight:"bold", fontSize:14, fontFamily:"serif"}}>{title}</Text>
                </View>

                <View style={{flexDirection : "row", justifyContent :"flex-start"}}>
                  <AntDesign name="star" color={"#999999"} opacity={0.5} size={17}/>
                  <Text><Text style={{color:"#8bbf15"}}>  {rating}</Text> . {genre}</Text>
                </View>
                <View style={{flexDirection:"row", marginLeft: 5 , alignItems:"center"}}>
                    <Ionicons style={{color : "gray"}} size={15} name="location-outline"/>
                    <Text style={{color:"gray", marginLeft :5,fontSize : 14}} >Monastir , Tounis</Text>
                </View>

        </TouchableOpacity>
    </SafeAreaView>

 )
}
export default PalcesCard;