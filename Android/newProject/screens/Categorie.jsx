import  React , {useLayoutEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import { Dimensions,StyleSheet, SafeAreaView, View,Text,TextInput ,Image , ScrollView,ImageBackground,TouchableOpacity} from 'react-native';

import PalcesCard from "../components/palcesCard"
import Block from "../components/Categorie/Block";
import {  sizes } from "../components/constants/themes";

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {  Divider} from '@rneui/themed';


import ribat from '../assets/Home/ribat.jpg';
import sidibou from '../assets/Home/sidibou.jpg';
import elgrotte from '../assets/Home/elgrotte.jpg';
import Costa from '../assets/Home/Costa.jpg';
import Farik from '../assets/Home/Farik.jpg';
import Loft from '../assets/Home/Loft.jpg';
import Viking from '../assets/Home/Viking.jpg';
import Cap from '../assets/Home/Cap.jpg';
import sahara from '../assets/Home/sahara.jpg';
import Pirate from '../assets/Home/Pirate.jpg';
import marina from '../assets/Home/marina.jpg';
import avatar from '../assets/NFT/avatar.png';

const avatarUri = Image.resolveAssetSource(avatar).uri;

const ribatUri = Image.resolveAssetSource(ribat).uri;
const sidibouUri = Image.resolveAssetSource(sidibou).uri;
const elgrotteUri = Image.resolveAssetSource(elgrotte).uri;
const CostaUri = Image.resolveAssetSource(Costa).uri;
const FarikUri = Image.resolveAssetSource(Farik).uri;
const LoftUri = Image.resolveAssetSource(Loft).uri;
const VikingUri = Image.resolveAssetSource(Viking).uri;
const marinaUri = Image.resolveAssetSource(marina).uri;
const saharaUri = Image.resolveAssetSource(sahara).uri;
const PirateUri = Image.resolveAssetSource(Pirate).uri;

const { width } = Dimensions.get("window");

function Categorie (){
    const nav = useNavigation();
    const route = useRoute();

      const Restaurant = [
          
          {icon: elgrotteUri,    title:'El grotte',   price: "8"  ,       genre:"Restaurant", adress:"hdr",    rating:"3.3"  ,id :'1'},
          {icon: LoftUri,        title:'El Loft',     price: "12"  ,       genre:"Restaurant", adress:"hdr",    rating:"3.3"  ,id :'2'},
          {icon: PirateUri,      title:'Pirates',     price: "10"  ,       genre:"Restaurant", adress:"hdr",    rating:"2.4"  ,id :'3'},
      ]
      const Coffee = [
          {icon: CostaUri,     title:'Costa',          price: "10"  ,  genre:"Coffee", adress:"hdr", rating:"3.7"     ,id :'1'},
          {icon: sidibouUri,   title:'Sidi bou Said',  price: "11"  , genre:"Coffee", adress:"hdr", rating:"2.2"     ,id :'2'},
          {icon: FarikUri,     title:'El Farik',    price: "8"  ,   genre:"Coffee", adress:"hdr", rating:"3.3"     ,id :'3'},
          {icon: VikingUri,    title:'Viking',    price: "13"  ,   genre:"Coffee", adress:"hdr", rating:"3.3"     ,id :'3'},
      ]


      const Hotel = [
        {icon: ribatUri,     title:'Forte El Ribat',   genre:"Hotel", adress:"hdr", rating:"4.1"     ,id :'1'},
        {icon: saharaUri,    title:'Sahara',           genre:"Hotel", adress:"hdr", rating:"3.7"     ,id :'2'},
        {icon: marinaUri,    title:'Marina',           genre:"Hotel", adress:"hdr", rating:"3.6"     ,id :'3'},   
    ]

    const location = [
      {  title:'Restaurant'     , id :'1'      , list: Restaurant},
      {  title:'Coffee'         , id :'2'      , list: Coffee},
      {  title:'Hotel'          , id :'5'      , list: Hotel},
    ];

    const filteredData = route.params && route.params.title ? location.filter(item => item.title === route.params.title).map(item => item.list) : []
    useLayoutEffect ( () => {
        nav.setOptions({
            headerShown : false  ,
        })
    },[])


    const renderData = () => {

      if (filteredData.length > 0) {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ paddingVertical: sizes.base * 1.5 }}   >
              <Text style={{fontSize : 22 , fontWeight:"bold",margin:5}} >{filteredData[0][0].genre}</Text>
              <Divider style={{color:"gray",marginBottom:15 , fontWeight:"bold"}}/>
              <Block flex={false} row space="between" style={styles.categories}>
                {filteredData[0].map((category,id) => (
                    <ScrollView  vertical contentContainerStyle={{    paddingHorizontal:15,   }}  showsHorizontalScrollIndicator={false} >
                      <PalcesCard key={id} style={styles.category}
                        title={category.title} 
                        imageUrl={category.icon} 
                        price={category.price} 
                        desc_short="éqdfq"  
                        genre={category.genre} 
                        adress="hdr" 
                        rating={category.rating} 
                        lat="sdf"  
                        liste={filteredData[0]}
                      />
                    </ScrollView>
                ))}
              </Block>
              </ScrollView>
              );
      } else {  return <View><Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>No data to display</Text></View>  }
    
    }
    
    return (
        
    <SafeAreaView style={{ flex: 1,paddingTop:55, paddingHorizontal:20 }}>
        
        <View style={{ flexDirection: "row",alignContent:"center" }}>

        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => nav.toggleDrawer()} >
                <Ionicons style={{color : "gray", paddingTop:8}} name="grid-outline" size={25}/>
            </TouchableOpacity>
        </View>
            <View style={{flex:2}}>
                <Text style={{fontSize : 20 , fontWeight:"bold"}}>Go Ma Ville</Text>
                <View style={{flexDirection:"row" }}>
                    <Ionicons style={{color : "gray"}} size={15} name="location-outline"/>
                    <Text style={{color:"gray"}} >Monastir , Tounis</Text>
                </View>
            </View>
            
            <TouchableOpacity onPress={() => nav.navigate("Profile")} >
            <Image source={{uri : avatarUri }} style={{height:40,width:40,borderRadius:30}} />
            </TouchableOpacity>

        </View>

        <View>
            {renderData()} 
        </View>
        
      </SafeAreaView>
    );
  }
  export default Categorie;

  const styles = StyleSheet.create({
    categories: {
      flexWrap: "wrap",
      paddingHorizontal: 14,
      marginBottom: 50,
      width:320
    },
    category: {
      // this should be dynamic based on screen width
      minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
      maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
      maxHeight: (width - sizes.padding * 2.4 - sizes.base) / 1.5,
      
    }
  });