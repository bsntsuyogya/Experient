import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Dashboard from "../screens/Dashboard/Dashboard";

const Stack=createNativeStackNavigator()

const AppStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"Dashboard"}>
            <Stack.Screen name='Dashboard' component={Dashboard}/>
        </Stack.Navigator>
    )
}

export default AppStack;