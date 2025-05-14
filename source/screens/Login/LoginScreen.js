import React, {useEffect} from "react";
import { Text, View } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { login } from "./redux/LoginSaga";

const LoginScreen=()=> {
  const dispatch=useDispatch()
  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [snackMessage, setSnackMessage] = React.useState("");

  const submit = () => {
    if(userName!==""&&password!==""){
      setUserName("")
      setPassword("")
      setSnackMessage("Success");
      dispatch(login())
    } else {
      setPassword("")
      setSnackMessage("Please try again!!!");
    }

  };

  useEffect(() => {
    if (usernameRef.current) usernameRef.current.focus();
  },[]);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>Welcome!</Text>
      <TextInput
        label='Username'
        mode='outlined'
        onChangeText={setUserName}
        onSubmitEditing={() => {
          if (passwordRef.current) passwordRef.current.focus();
        }}
        ref={usernameRef}
        style={{ margin: 8 }}
        value={userName}
      />
      <TextInput
        passwordRules={()=>{}}
        label='Password'
        mode='outlined'
        onChangeText={setPassword}
        ref={passwordRef}
        style={{ margin: 8 }}
        value={password}
      />
      <Button onPress={submit} style={{ margin: 8 }} mode='contained'>
        <Text style={{ color: "white" }}>Submit</Text>
      </Button>
      <Snackbar  visible={!!snackMessage} onDismiss={() => setSnackMessage("")}>
        <Text style={{color:'white'}}>{snackMessage}</Text>
      </Snackbar>
    </View>
  );
}

export default LoginScreen;