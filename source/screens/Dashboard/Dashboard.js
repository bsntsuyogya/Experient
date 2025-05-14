import React from "react"
import { Text, View } from "react-native"
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logout } from "../Login/redux/LoginSaga";


const Dashboard=()=>{
    const dispatch=useDispatch()
    const onSubmit=()=>{
        dispatch(logout())
    }
    return(
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Button onPress={onSubmit} style={{ margin: 8 }} mode='contained'>
                <Text style={{ color: "white" }}>Logout</Text>
            </Button>
        </View>
    )
}

export default Dashboard;