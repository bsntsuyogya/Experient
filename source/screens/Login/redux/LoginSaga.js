import axios from "axios"
import { setLogin } from "./LoginSlice"
import { clearPersistedData } from "../../../redux/store"

export const login=()=>async dispatch=>{
    console.log('-----------LOGIN-------')
    try {
            const response = await axios.get('https://timetracker-api.experient.com/auth/login')
    console.log('------RESPONSE',response)
    } catch (error) {
          dispatch(setLogin({authToken:'askldjflkasjdlfsjkdflksajlkf32asdf',refreshToken:'jlakjsdf899as'}))
    }

}

export const logout=()=>async dispatch=>{
    clearPersistedData()
     dispatch(setLogin({authToken:null,refreshToken:null}))
}