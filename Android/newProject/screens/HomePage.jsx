import { Ionicons} from '@expo/vector-icons';
import  React , {useLayoutEffect} from 'react';
import { SafeAreaView, View,Text,TextInput ,Image , ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import FeaturedRow from "../components/FeaturedRow"
import { NavigationContainer,useNavigation } from '@react-navigation/native';

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


function HomePage (){
    const nav = useNavigation();

    const location = [
        {icon: retaurantUri,     title:'retaurant'     ,id :'1'},
        {icon: coffeeUri,        title:'coffee'        ,id :'2'},
        {icon: banqueUri,        title:'bank'          ,id :'3'},
        {icon: gymUri,           title:'gym'           ,id :'4'},
        {icon: hotelUri,         title:'hotel'         ,id :'5'},
        {icon: doctorUri,        title:'doctor'        ,id :'6'},
        {icon: dentistUri,       title:'dentist'       ,id :'7'},
        {icon: gasUri,           title:'gas'           ,id :'8'},
        {icon: pharmacyUri,      title:'pharmacy'      ,id :'9'},
        {icon: lawyerUri,        title:'lawyer'        ,id :'10'},
    ];

    const bestL = [
        {icon: ribatUri,     title:'Forte El Ribat',   genre:"Hotel", adress:"hdr", rating:"4.1"     ,id :'1'},
        {icon: sidibouUri,   title:'Sidi bou Said',  price: "11"  , genre:"Coffee", adress:"hdr", rating:"2.2"     ,id :'2'},
        {icon: elgrotteUri,    title:'El grotte',   price: "8"  ,       genre:"Restaurant", adress:"hdr",    rating:"3.3"  ,id :'3'},
    ]

    const pricesD = [
        {icon: CostaUri,     title:'Costa',          price: "10"  ,  genre:"Coffee", adress:"hdr", rating:"3.7"     ,id :'1'},
        {icon: FarikUri,     title:'El Farik',      price: "8"  ,   genre:"Coffee", adress:"hdr", rating:"3.3"     ,id :'2'},
        {icon: LoftUri,        title:'El Loft',     price: "12"  ,       genre:"Restaurant", adress:"hdr",    rating:"3.3"  ,id :'3'},
        {icon: PirateUri,      title:'Pirates',     price: "10"  ,       genre:"Restaurant", adress:"hdr",    rating:"2.4"  ,id :'4'},
    ]

    const rec = [
        {icon: VikingUri,    title:'Viking',    price: "13"  ,   genre:"Coffee", adress:"hdr", rating:"3.3"     ,id :'1'},
        {icon: marinaUri,    title:'Marina',    price: "7"    ,   genre:"Hotel", adress:"hdr", rating:"3.6"     ,id :'2'}, 
        {icon: saharaUri,    title:'Sahara',    price: "5"    ,   genre:"Hotel", adress:"hdr", rating:"3.7"     ,id :'3'},
    ]

    useLayoutEffect ( () => {
        nav.setOptions({
            headerShown : false  ,
        })
    },[])

    return (
        
    <SafeAreaView style={{ flex: 1,paddingTop:55, paddingHorizontal:20 , backgroundColor :"#f7f9fc" }}>
        
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

        <View style={{flexDirection:"row" , borderRadius:30 ,marginVertical:10  ,padding:15 , backgroundColor:"#e3e3e3" }}>

            <Ionicons name="search" size={20} color ={"gray"}/>
            <TextInput  style={{paddingHorizontal: 10}} placeholder='Search your destination ...'/>
            <Ionicons style={{marginLeft:60}} name="filter" size={20} color ={"gray"}/>

        </View>


        <ScrollView style={{ marginTop:15 }} contentContainerStyle={{
            paddingBottom:10, marginRight:10
        }} showsHorizontalScrollIndicator={false} >

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

                <View style={{ flexDirection : "row" }}>
                    {
                        location.map((item,id) => ( 
                        <View key={id} style={{borderWidth : 0.5 ,marginRight : 10 ,borderColor:"gray", padding: 10 , borderRadius: 40}}>
                            <TouchableOpacity  onPress={() => nav.navigate("Categories")} >
                                <Image key={item.id} source={{uri : item.icon }} style={{  height:30,  width:30,  borderRadius:10,  marginLeft:5 ,alignContent:"center" }}/>
                                <Text  style={{ fontWeight:'bold'}} >{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

            </ScrollView>

        <FeaturedRow 
            title="The best Locations" 
            description="Color-hex.com also generates a simple css code for the selected color."
            id="123"
            items={bestL}
        />

        <FeaturedRow 
            title="Prices discount" 
            description="Color-hex.com also generates a simple css code for the selected color."
            id="1234"
            items={pricesD}
        />

        <FeaturedRow 
            title="Recommended" 
            description="Color-hex.com also generates a simple css code for the selected color."
            id="12345"
            items={rec}
        />
        
        </ScrollView>                    
        
      </SafeAreaView>
    );
  }
  export default HomePage;