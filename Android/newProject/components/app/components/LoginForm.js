import React, { useState,useEffect,useContext } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/globalContext';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Profile from 'C:/Users/sghai/Go-Ma-Ville/Android/newProject/screens/Profile';
import Settings from 'C:/Users/sghai/Go-Ma-Ville/Android/newProject/screens/Settings';

const LoginForm = () => {
  const navigation = useNavigation();
  const globalContext = useContext(Context)
  const { setIsLoggedIn , setProfile, isLoggedIn, profilo } = globalContext;
  
  useEffect(() => {
    console.log('Success: ', isLoggedIn);
    console.log('Success: ', profilo.name);
    navigation.navigate("Settings",profilo.name);
    console.log(profilo);
  }, [isLoggedIn, profilo]);

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const validationSchema = Yup.object({
    username: Yup.string()
      .trim()
      .min(3, 'Invalid name!')
      .required('Name is required!'),
    password: Yup.string()
      .trim()
      .min(8, 'Password is too short!')
      .required('Password is required!'),
  });

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const Login = async (values, formikActions) => {
  
    const user = {
      username: values.username, 
      password: values.password
  };
    const response=await fetch('http://192.168.1.105:8000/user/verif_user_login/', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type':'multipart/form-data; boundary=--------------------------499310528544182401120976',
        },
        body:JSON.stringify(user) 
    })

    if(response.status == 200) {

      const responseJson = await response.json();
      console.log('Success:', responseJson.usertoken);
      setProfile({name:responseJson.name , email:responseJson.email});
      setTimeout(() => {
        setIsLoggedIn(true);
      }, 100);

  } else {
      console.log(response.status)
      console.log(response.statusText)
      return Promise.reject(new Error(response.statusText))
  }
  

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={Login}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          const { username, city, email, password, confirmPassword } = values;
          return (
            <>
              <FormInput
                value={username}
                error={touched.username && errors.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                label='User Name'
                placeholder='John Smith'
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                autoCapitalize='none'
                secureTextEntry
                label='Password'
                placeholder='********'
              />
              
              <FormSubmitButton
                submitting={isSubmitting}
                onPress={handleSubmit}
                title='Log in'
              />
            </>
          );
        }}
      </Formik>
    </FormContainer>
);
};

const styles = StyleSheet.create({});

export default LoginForm;
