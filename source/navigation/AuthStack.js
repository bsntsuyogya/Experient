import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/Login/LoginScreen";

const Stack=createNativeStackNavigator()

const AuthStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"Login"}>
             <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack;