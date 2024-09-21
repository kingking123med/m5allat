import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Context, Provider } from '../components/app/context/globalContext'
import Settings from '../screens/Settings';
import AppForm from '../components/app/components/AppForm';

const Stack = createStackNavigator();

const Profile = (props) => {

  const globalContext = useContext(Context)
  const { isLoggedIn } = globalContext;
  
  return (
    <Provider>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Settings" component={Settings}  options={{ headerShown : false }} />
        ) : (
          <Stack.Screen name="AppForm" component={AppForm} options={{ headerShown : false }} />
        ) }
      </Stack.Navigator>
      {console.log(isLoggedIn)}
    </Provider>
  );
}; 
  
export default Profile;
