import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
} from 'react-native';

import FormHeader from './FormHeader';
import FormSelectorBtn from './FormSelectorBtn';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import LoginProvider from '../context/LoginProvider';
import {Provider} from '../context/globalContext';
const { width } = Dimensions.get('window');

export default function AppForm({ navigation }) {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['#1775d2', '#b7b4b4'],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['#b7b4b4', '#1775d2'],
  });

  return (
    <View style={{ flex: 1, paddingTop: 120 }}>
      <View style={{ height: 80 }}>
        <FormHeader
          leftHeading='Welcome '
          rightHeading='Back'
          subHeading='Bienvenue sur Go-to-MaVille'
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title='Login'
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title='Sign up'
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <Provider>
            <LoginForm navigation={navigation} />
        </Provider>
        <ScrollView>
          <SignupForm navigation={navigation} />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
