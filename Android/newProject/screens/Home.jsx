import React, {useEffect, useState}from 'react';
import {View ,Text,Image,FlatList,StyleSheet,TouchableOpacity,ImageBackground,ScrollView,Dimensions} from "react-native"
import { UseNavigation } from '@react-navigation/native';
import DateTime from '../components/DateTime'
import {  Divider} from '@rneui/themed';
import monastir_1 from '../assets/monastir/monastir_1.jpg';
import monastir_2 from '../assets/monastir/monastir_2.jpg';
import monastir_3 from '../assets/monastir/monastir_3.jpg';


import Cap from '../assets/Home/Cap.jpg';
import Farik from '../assets/Home/Farik.jpg';
import dabeb from '../assets/Home/dabeb.jpg';
import La_grote from '../assets/Home/La_grote.jpg';
import Loft from '../assets/Home/Loft.jpg';
import Pirate from '../assets/Home/Pirate.jpg';
import sahara from '../assets/Home/sahara.jpg';
import Viking from '../assets/Home/Viking.jpg';


const {width}=Dimensions.get("window");
const height=width*1/1.1;

const monastir_1Uri = Image.resolveAssetSource(monastir_1).uri;
const monastir_2Uri = Image.resolveAssetSource(monastir_2).uri;
const monastir_3Uri = Image.resolveAssetSource(monastir_3).uri;



const CapUri = Image.resolveAssetSource(Cap).uri;
const FarikUri = Image.resolveAssetSource(Farik).uri;
const dabebUri = Image.resolveAssetSource(dabeb).uri;
const La_groteUri = Image.resolveAssetSource(La_grote).uri;
const LoftUri = Image.resolveAssetSource(Loft).uri;
const PirateUri = Image.resolveAssetSource(Pirate).uri;
const saharaUri = Image.resolveAssetSource(sahara).uri;
const VikingUri = Image.resolveAssetSource(Viking).uri;

export default class Home extends React.Component {

    state ={
        active:0,
       
    }

    change=({nativeEvent})=>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({active:slide});
        }
    }

    render() {
    
    const images=[
        monastir_1Uri,
        monastir_2Uri,
        monastir_3Uri
    ];

    

    const cat1=[
        CapUri ,
        FarikUri,
        dabebUri,
        La_groteUri,
    ]
    const cat2=[
        LoftUri,
        PirateUri,
        saharaUri,
        VikingUri 
    ];


return (

<View style={{backgroundColor:"#fff9"}} >
    <ScrollView vertical > 
    <View style={style.container}>
        <ScrollView 
            onScroll={this.change}
            showsHorizontalScrollIndicator={false} 
            pagingEnabled 
            horizontal 
            style={style.scroll}>

            {
                images.map((image,index) =>
                    <ImageBackground key={index}    source={{uri:image}}    style={style.image}>
                         <DateTime  />
                    </ImageBackground> 
                    )
            }
        </ScrollView>
        <View style={style.dot}>
            
            {
                images.map((i,k)=>
                <Text key={k} style={ k==this.state.active ? style.tdot : style.tdotActive}>⬤</Text>
                )
            }
        </View>
    </View>

    <View style={style.container}>
        <Text style={style.cat}>CATEGORIES</Text>
        <Divider style={style.separater}/>
        <View>
            <ScrollView 
                onScroll={this.change}
                showsHorizontalScrollIndicator={false} 
                pagingEnabled 
                horizontal 
                style={style.scroll}>

                {
                    cat1.map((image,index) =>
                        <Image key={index}
                        source={{uri:image}}
                        style={style.image_2}/> )
                }
            </ScrollView>
        </View>
        <View>
            <ScrollView 
                onScroll={this.change}
                showsHorizontalScrollIndicator={false} 
                pagingEnabled 
                horizontal 
                style={style.scroll}>
                {
                    cat2.map((image,index) =>
                        <Image key={index}
                        source={{uri:image}}
                        style={style.image_2}/> )
                }
            </ScrollView>
        </View>
        
    </View>
    </ScrollView>
</View>
   )
}
}
const style= StyleSheet.create({
    container:{
     width,
     height,
     backgroundColor:"#fff9"
    },
    scroll: {
    width,
     height
    },
    image:{
        height,
        width,
        resizeMode:'contain',
    },
    dot:{
        flexDirection:"row" ,
        position :"absolute" , 
        bottom:0 ,
        alignSelf:"center",
        
    },
    tdot:{
        fontSize:(width/26),
        color:"#fff",
        margin:5
    },
    tdotActive:{
        fontSize:(width/26),
        color:"#fff9",
        margin:5
    },
    trucs:{
        marginTop:15,
        fontSize:22,
        fontWeight:"bold",
        paddingLeft: 17,
    },
    cat:{
        marginTop:20,
        fontSize:20,
        fontWeight:"bold",
        paddingLeft: 17,
        backgroundColor:"#fff9"
    },
    image_2:{height:100,
        width:"70%",
        resizeMode:'contain',
        flex:.2,
        flexDirection: "row",
        borderRadius:15,
        paddingLeft:150,
        backgroundColor:"#fff9"
    },
    separater:{
        marginBottom:15,
        marginVertical:8,
        borderBottomColor:"#737373",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
});
