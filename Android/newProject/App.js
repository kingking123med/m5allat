import React, { useEffect }  from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomeSideMenu from './CostumSideMenu';
import ItemScreen from './screens/ItemScreen'
import Card from './components/Categorie/Card';
import HomePage from './screens/HomePage'
import Categories from './screens/Categories'
import Categorie from './screens/Categorie'
import Forum from './screens/Forum'
import Settings from './screens/Settings';
import {Provider} from "../newProject/components/app/context/globalContext"
import Profile from './screens/Profile';

import Header from './components/header/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { Ionicons,MaterialIcons,FontAwesome } from '@expo/vector-icons';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" /> 
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack () {
  return (
    <Provider>
      <Stack.Navigator initialRouteName = "Categories" 
        creenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#1171c9",
      }} >
        <Stack.Screen name="Categories" component={Categories}  options={{headerShown : false }}/>
        <Stack.Screen name="Categorie" component={Categorie}  options={{headerShown : false }}/>
        <Stack.Screen name="ItemScreen" component={ItemScreen}  options={{headerShown : false }}/>
    </Stack.Navigator>
    </Provider>
  );
}

function MyStack2 () {
  return (
    <Provider>
      <Stack.Navigator initialRouteName = "Categories" 
        creenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#1171c9",
      }} >
        <Stack.Screen  name="Profile" component={Profile}  options={{headerShown : false }}/>
        <Stack.Screen name="Settings" component={Settings}   options={{headerShown : false }}/>
    </Stack.Navigator>
    </Provider>
  );
}

function MyStack3 () {
  return (
    <Provider>
      <Stack.Navigator initialRouteName = "Home" 
        creenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#1171c9",
      }} >
        <Stack.Screen  name="Home" component={HomePage}  options={{headerShown : false }}/>
        <Stack.Screen name="ItemScreen" component={ItemScreen}   options={{headerShown : false }}/>
    </Stack.Navigator>
    </Provider>
  );
}

function MyBottomTab () {
  return (
    <Provider>
      <Tab.Navigator initialRouteName = "MyStack3" 
        creenOptions={{
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#1171c9",
      }} >
        <Tab.Screen name="MyStack3" component={MyStack3}  options={{headerShown : false ,title : "Home" , tabBarIcon :(props) => <Ionicons {...props} size= {20} name='home'/>}}/>
        <Tab.Screen name="Favorites" component={Forum} options={{headerShown : false ,title : "Favorite" , tabBarIcon :(props) => <MaterialIcons {...props} size= {20} name='favorite'/>}}/>
        <Tab.Screen name="Metro" component={Forum} options={{headerShown : false ,title : "Metro" , tabBarIcon :(props) => <Ionicons {...props} size= {20} name='train'/>}}/>
        <Tab.Screen name="Profile" component={MyStack2} options={{headerShown : false ,title : "Profile" , tabBarIcon :(props) => <FontAwesome {...props} size= {20}  name='user'/>}}/>
      </Tab.Navigator>
    </Provider>
  );
}

function DrawerNav (){
  return (          <Provider>
  <Drawer.Navigator initialRouteName = "MyBottomTab" drawerContent={props=><CustomeSideMenu {...props} />}>
        <Drawer.Screen name="MyBottomTab" 
                       component={MyBottomTab} 
                       options={{ headerShown : false, drawerIcon:(props) => <Ionicons {...props} color ={"gray"} name="grid-outline" size={20}/> }} />
        <Drawer.Screen name="Categories" 
                       component={MyStack }
                       options={{headerShown : false  ,  headerTitle : () => <Header name="Categories"/> , 
                                   headerStyle:{  height : 80 , backgroundColor:"#1775d2" , shadowColor:"#000" ,elevation:25 }}} />
        <Drawer.Screen name="Favorites" 
                       component={NotificationsScreen} 
                       options={{ headerTitle : () => <Header name="Favorites"/> , 
                       headerStyle:{  height : 80 , backgroundColor:"#1775d2" , shadowColor:"#000" ,elevation:25 }}} />
        <Drawer.Screen name="Metro" 
                       component={Forum} 
                       options={{headerShown : false  , headerTitle : () => <Header name="Metro"/> , 
                       headerStyle:{  height : 80 , backgroundColor:"#1775d2" , shadowColor:"#000" ,elevation:25 }}} />
        <Drawer.Screen name="Profile" 
                       component={MyStack2} 
                       options={{  headerShown : false,headerTitle : () => <Header name="Settings"/> , 
                       headerStyle:{  height : 80 , backgroundColor:"transparent" , shadowColor:"#000" ,elevation:25 }}} />
        <Drawer.Screen name="Contact" 
                       component={HomeScreen} 
                       options={{ headerTitle : () => <Header name="Contact"/> , 
                       headerStyle:{  height : 80 , backgroundColor:"#1775d2" , shadowColor:"#000" ,elevation:25 }}} />
        <Drawer.Screen name="LogIn/Signup" 
                       component={MyStack2} 
                       options={{headerShown : false  , headerTitle : () => <Header name="Log out"/>  ,
                       headerStyle:{  height : 80 , backgroundColor:"#1775d2" , shadowColor:"#000" ,elevation:25 }}} />
      </Drawer.Navigator>
      </Provider>
  );

}

export default function App() {

  return (

    <NavigationContainer >
      
        <DrawerNav/>

    </NavigationContainer>

  );
}
