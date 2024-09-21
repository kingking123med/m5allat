import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TextInput,View,TouchableOpacity,Text } from "react-native";
import { Ionicons} from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useLogin } from '../components/app/context/LoginProvider';
import Block from "../components/Categorie/Block";
import Texte from "../components/Categorie/Text";
import Divider from "../components/Categorie/Divider";
import { colors, sizes, fonts } from "../components/constants/themes";

import avatar from '../assets/NFT/avatar.png';


const avatarUri = Image.resolveAssetSource(avatar).uri;


const profiles = {
  username: "mara",
  location: "Tunis",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/NFT/avatar.png"),
};


class Settings extends Component {
  state = {
    editing: null,
    profile: {},
  };
  
  componentDidMount() {
    this.setState({ profile: this.props.profile  });
  }

  handleEdit(name, text) {
    const { profile } = this.state;
    profile[name] = text;

    this.setState({ profile });
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }


  renderEdit(name) {
    const { profile, editing } = this.state;

    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => this.handleEdit([name], text)}
        />
      );
    }

    return <Texte bold style={{fontSize : 16}}>{profile[name]}</Texte>;
  }

  render() {
    const { profile, editing } = this.state;
   

    return (

      
      <Block>
        <View style={{ flexDirection: "row",alignContent:"center" ,marginTop :50, paddingLeft : 20}}>

          <View style={{flex:1}}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
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
        <Block flex={false} row center space="between" style={[styles.header ,{paddingTop : 25}]}>
          <Texte h1 bold>
            Settings
          </Texte>
          <TouchableOpacity >
                <Image source={{uri : avatarUri }} style={{height:40,width:40,borderRadius:30}} />
          </TouchableOpacity>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Texte gray style={{ marginBottom: 10 }}>
                  Name
                </Texte>
                {this.renderEdit("username")}
              </Block>
              <Texte
                medium
                secondary
                onPress={() => this.toggleEdit("username")}
              >
                {editing === "username" ? "Save" : "Edit"}
              </Texte>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Texte gray style={{ marginBottom: 10 }}>
                    City
                </Texte>
                {this.renderEdit("location")}
              </Block>
              <Texte
                medium
                secondary
                onPress={() => this.toggleEdit("location")}
              >
                {editing === "location" ? "Save" : "Edit"}
              </Texte>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Texte gray style={{ marginBottom: 10 }}>
                  Email
                </Texte>
                <Texte bold>{profile.email}</Texte>
              </Block>
            </Block>
          </Block>

          <Divider margin={[sizes.base, sizes.base * 2]} />


        </ScrollView>
      </Block>
    );
  }
}

Settings.defaultProps = {
  profile: profiles,
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.base * 2
  },
  avatar: {
    height: sizes.base * 2.2,
    width: sizes.base * 2.2
  },
  inputs: {
    marginTop: sizes.base * 0.7,
    paddingHorizontal: sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    marginTop: sizes.base * 0.7,
    paddingHorizontal: sizes.base * 2
  },
  thumb: {
    width: sizes.base,
    height: sizes.base,
    borderRadius: sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: colors.secondary
  },
  toggles: {
    paddingHorizontal: sizes.base * 2
  }
});