import React from "react";
import { NavigationContainer,useNavigation, } from '@react-navigation/native';
import { View, Text, Image ,Icon, TouchableOpacity ,Ionicons} from "react-native";
import sidib from "../assets/images/list/cafe-resto/sidibou.jpg" 



function Card () {
    
    const nav = useNavigation();
    const type="Open";
    const sidibou = Image.resolveAssetSource(sidib).uri;

  return (
    <View>
        <View style={{ flexDirection: "row",alignContent:"center" ,marginTop :50, paddingLeft : 20}}>

        <View style={{flex:1}}>
            <TouchableOpacity onPress={() => nav.navigate.toggleDrawer()} >
                <Ionicons style={{color : "gray", paddingTop:8}} name="grid-outline" size={25}/>
            </TouchableOpacity>
        </View>
        <View style={{flex:2 , paddingRight :15}}>
            <Text style={{fontSize : 20 , fontWeight:"bold"}}>Go Ma Ville</Text>
            <View style={{flexDirection:"row" }}>
                <Ionicons style={{color : "gray"}} size={15} name="location-outline"/>
                <Text style={{color:"gray"}} >Monastir , Tounis</Text>
            </View>
            
        </View>
        </View>
        <View style={styles.content}>

            <View style={styles.box} >
                <View style={styles.img}>
                <Image source={{ uri: sidibou }} style={styles.cover} />
                </View>
                <View style={styles.text}>
                <View style={styles.type}>
                    <Text
                    style={[
                        styles.typeText,
                        {
                        backgroundColor:
                            type === "Closed" ? "#ff98001a" : "#25b5791a",
                            color: type === "Open" ? "#25b579" : "#ff9800",
                        },
                    ]}
                    >
                    {type}
                    </Text>
                    <Icon name="heart" size={20} color="#ff0000" style={styles.icon}/>
                </View>
                <Text style={styles.name}>Sidi Bou Said</Text>
                <View style={styles.location}>
                    <Icon name="location-dot" size={20} color="#0000ff" style={styles.icon}/>
                    <Text style={styles.locationText}>Marina, Monastir</Text>
                </View>
                </View>
                <View style={styles.button}>
                <View>
                    <Text>$8,000/person</Text>
                </View>
                <Text style={styles.categoryText}>Cafe-Resto</Text>
                </View>
            </View>
        </View>
    </View>
  );
};
export default Card;

const styles = {
  content: {
    height: 'fit-content',
    margin: 50,
  },
  box: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    margin: 10,
  },
  img: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    flex: 1,
    padding: 10,
  },
  type: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  typeText: {
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
 
  locationText: {
    color: "#72809d",
    paddingLeft: 10
  },
button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e4e8f3',
},
icon: {
    marginRight: 10
},
categoryText: {
    padding: 4,
    paddingHorizontal: 15,
    borderRadius: 2,
    fontWeight: '600',
    fontSize: 13,
    display: 'inline-block',
},
}