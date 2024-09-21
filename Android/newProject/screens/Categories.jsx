import { Ionicons,AntDesign } from '@expo/vector-icons';
import  React , {useLayoutEffect} from 'react';
import { Dimensions,StyleSheet, SafeAreaView, View,Text,TextInput ,Image , ScrollView,ImageBackground,TouchableOpacity} from 'react-native';

import Card from "../components/Categorie/Card";
import Badge from "../components/Categorie/Badge";
import Block from "../components/Categorie/Block";
import { colors, sizes, fonts } from "../components/constants/themes";

import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Categorie from './Categorie';

import retaurant from '../assets/Categories/restaurant.png';
import coffee from '../assets/Categories/coffeeshop.png';
import banque from '../assets/Categories/banque.png';
import gym from '../assets/Categories/gym.png';
import hotel from '../assets/Categories/hotel.png';
import doctor from '../assets/Categories/doctor.png';
import dentist from '../assets/Categories/dentist.png';
import gas from '../assets/Categories/gas.png';
import pharmacy from '../assets/Categories/pharmacy.png';
import lawyer from '../assets/Categories/lawyer.png';

import {  Divider} from '@rneui/themed';

import avatar from '../assets/NFT/avatar.png';

const avatarUri = Image.resolveAssetSource(avatar).uri;



const retaurantUri = Image.resolveAssetSource(retaurant).uri;
const coffeeUri = Image.resolveAssetSource(coffee).uri;
const banqueUri = Image.resolveAssetSource(banque).uri;
const gymUri = Image.resolveAssetSource(gym).uri;
const hotelUri = Image.resolveAssetSource(hotel).uri;
const doctorUri = Image.resolveAssetSource(doctor).uri;
const dentistUri = Image.resolveAssetSource(dentist).uri;
const gasUri = Image.resolveAssetSource(gas).uri;
const pharmacyUri = Image.resolveAssetSource(pharmacy).uri;
const lawyerUri = Image.resolveAssetSource(lawyer).uri;

const { width } = Dimensions.get("window");

function Categories (){
    const nav = useNavigation();

    const location = [
        {icon: retaurantUri,     title:'Restaurant'     ,count:"20"      ,id :'1'},
        {icon: coffeeUri,        title:'Coffee'        ,count:"22"      ,id :'2'},
        {icon: banqueUri,        title:'Bank'          ,count:"5"      ,id :'3'},
        {icon: gymUri,           title:'Gym'           ,count:"9"      ,id :'4'},
        {icon: hotelUri,         title:'Hotel'         ,count:"7"      ,id :'5'},
        {icon: doctorUri,        title:'Doctor'        ,count:"17"      ,id :'6'},
        {icon: dentistUri,       title:'Dentist'       ,count:"8"      ,id :'7'},
        {icon: gasUri,           title:'Gas'           ,count:"3"      ,id :'8'},
        {icon: pharmacyUri,      title:'Pharmacy'      ,count:"12"      ,id :'9'},
        {icon: lawyerUri,        title:'Lawyer'        ,count:"20"      ,id :'10'},
    ];


    useLayoutEffect ( () => {
        nav.setOptions({
            headerShown : false  ,
        })
    },[])

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

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: sizes.base * 1.5 }}   >
            <Text style={{fontSize : 22 , fontWeight:"bold",margin:5}} >Catégories</Text>
            <Divider style={{color:"gray",marginBottom:15 , fontWeight:"bold"}}/>
          <Block flex={false} row space="between" style={styles.categories}>
            {location.map(category => (
              <TouchableOpacity
                key={category.title}
                onPress={() => nav.navigate("Categorie",{ title: category.title } )}
              >
                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={55}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={{uri :category.icon}} style={{  height:45,  width:45,  borderRadius:10 ,alignContent:"center" }}/>
                  </Badge>
                  <Text medium height={20} style={{fontWeight:"bold"}}>
                    {category.title}
                  </Text>
                  <Text gray caption style={{color:"gray"}}>
                    {category.count} products
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
        
      </SafeAreaView>
    );
  }
  export default Categories;

  const styles = StyleSheet.create({
    categories: {
      flexWrap: "wrap",
      paddingHorizontal: 12,
      marginBottom: 50
    },
    category: {
      // this should be dynamic based on screen width
      minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
      maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
      maxHeight: (width - sizes.padding * 2.4 - sizes.base) / 1.5
    }
  });