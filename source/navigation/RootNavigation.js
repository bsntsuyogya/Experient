import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Stack=createNativeStackNavigator()

const RootNavigation=()=>{
    const {authToken}=useSelector(state=>state.login)

    useEffect(()=>{
        console.log('----AUTHTOKEN',authToken)
    },[authToken])
    return(
        <>{!!authToken?<AppStack/>:<AuthStack/>}</>
    )
}

export default RootNavigation;