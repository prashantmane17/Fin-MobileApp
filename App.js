import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import { BackHandler, ToastAndroid } from 'react-native';
import Login from './src/screens/Login';
import ForgotPasswordEmail from './src/components/forgetPassword/ForgotPasswordEmail';
import ForgotPasswordOTP from './src/components/forgetPassword/ForgotPasswordOTP';
import ForgotPasswordReset from './src/components/forgetPassword/ForgotPasswordReset';
import SignupScreen from './src/screens/SignupScreen';
const Stack = createStackNavigator();
export default function App() {
  const [exitApp, setExitApp] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (exitApp) {
        BackHandler.exitApp();
        return true;
      } else {
        setExitApp(true);
        ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
        setTimeout(() => setExitApp(false), 2000);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, [exitApp]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPasswordReset" component={ForgotPasswordReset} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

