import React, {useState} from "react";
import { Box, TextField, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login=({login})=>{
    const navigate=useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const onsubmit= async(e) => {
        e.preventDefault();
        console.log(username,password);
        const isLogin= await login({username, password});
        if(isLogin){
            navigate("/home");
        }else{
            alert("credenciales incorrectas");
        }
    };
    return(
        
        <form onSubmit={onsubmit}>
        <Box
            margin={"auto"}
            flexDirection={"column"}
            display={"flex"}
            width={400}
            marginTop={"20px"}
        >
            <TextField 
            label={"Username"} 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField 
            type={"password"} 
            label={"Password"} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            />
            <Button type={"submit"} variant="contained"/>
                Login
        </Box>
        </form>
    
    )
}

export default Login;