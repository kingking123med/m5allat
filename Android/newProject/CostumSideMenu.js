import React, { useState } from "react";
import {View ,Text,Image,FlatList,StyleSheet,TouchableOpacity,ImageBackground} from "react-native"
import {  Divider} from '@rneui/themed';
import Home from './assets/icons/Home.png';
import Categories from './assets/icons/Categories.png';

import Favorite from './assets/icons/Favorite.png';
import Metro from './assets/icons/Metro.png';
import Settings from './assets/icons/Settings.png';
import contact_us from './assets/icons/Contact_us.png';
import log_out from './assets/icons/Log_out.png';
import avatar from './assets/NFT/avatar.png';


const avatarUri = Image.resolveAssetSource(avatar).uri;
const HomeUri = Image.resolveAssetSource(Home).uri;
const CategoriesUri = Image.resolveAssetSource(Categories).uri;
const FavoriteUri = Image.resolveAssetSource(Favorite).uri;
const MetroUri = Image.resolveAssetSource(Metro).uri;
const SettingsUri = Image.resolveAssetSource(Settings).uri;
const contact_usUri = Image.resolveAssetSource(contact_us).uri;
const log_outUri = Image.resolveAssetSource(log_out).uri;


const ListArray = [
    {icon: HomeUri,       title:'Home'     ,id :'1'},
    {icon: CategoriesUri, title:'Categories' ,id :'2'},
    {icon: FavoriteUri,   title:'Favorite' ,id :'3'},
    {icon: MetroUri,      title:'Metro'    ,id :'4'},
    {icon: SettingsUri,   title:'Profile' ,id :'5'},
];
const ButtomListArray = [
    {icon: contact_usUri , title:'contact us '     ,id :'6'},
    {icon: log_outUri ,title:'log out' ,id :'7'},
];

const Item = ({ title, id,onPress,backgroundColor,color,icon}) => (
  <TouchableOpacity 
    onPress={() => onPress(id)} 
    style={[styles.item ,{backgroundColor:backgroundColor,color:color}]}>

    <Image source={{uri : icon }}
        
        style={{height:40,
        width:40,
        borderRadius:30,
        marginLeft:10,
     }}/>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

export default function CustomeSideMenu(props) {
    
    const [selectedId, setSelectedId] = useState(null);
    
    const renderItem = ({ item }) =>
    {
        const backgroundColor = item.id === selectedId ? "#97c4f0" : "white";
        const color = item.id === selectedId ? 'white' : 'gray';
        return(
        <Item 
            onPress={(id) => { setSelectedId(item.id);
            console.log('props:: ',id)
            props.navigation.navigate(props?.state?.routes[id-1].name) ;
            }}
            title={item.title} 
            icon={item.icon} 
            id ={item.id}    
            color ={color}
            backgroundColor ={backgroundColor}
             />
        );
    }
    
    return(
        <View style={{flex:1}} >
            
            <View style={{flex:0.25,
                   paddingTop:50,
                   paddingHorizontal:20
                   }}>
                
                <Image 
                source={{uri : avatarUri }}
                style={{height:70,
                    width:70,
                    borderRadius:45
                }}
                
                />
                <Text style={{fontWeight:"bold" , fontSize:18, marginTop:10,color: "black"}}>Mara</Text>
                <Text  style={{fontSize:14, marginTop:5,color: "black"}}>@Tounsia</Text>
                </View>
            <Divider />
            <View style={{ flex:0.55, marginTop : 10}}>
                <FlatList style={{flex:1 , width: "100%"}} data={ListArray}  renderItem={renderItem} />
            </View>
            <Divider />
            <View style={{ flex:0.25 , marginTop : 10}}>
                <FlatList data={ButtomListArray}   renderItem={renderItem} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    item: {
      paddingVertical: 7,
      marginVertical: 5,
      marginHorizontal: 16,
      flexDirection:"row",
      marginTop:.5,
      borderRadius:10,
    },
    image: {
      flex: .35,
      
    },
    title: {
      fontSize: 14,
      marginLeft:6,
    },
  });