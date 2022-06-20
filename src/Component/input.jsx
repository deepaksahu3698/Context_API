import React from "react";
import styled from "styled-components";
import  {BUttonContext} from "../Context/Button"
import { useContext } from "react";
const BodyWrapper = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  
`;



const Login = () => {
    

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const[dis_token,set_token]=React.useState("")


    const handleLogin = () => {
        const payload = { email, password };
        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.token) {
                    // 
                    // console.log(res.token)
                    set_token(res.token)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const  {login,togglelogin}=useContext(BUttonContext)



    return login=="LOGOUT"? (
        

        <BodyWrapper>

            <label>
                EMAIL
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                PASSWORD
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleLogin}>LOGIN</button>
            <div>
                <h3>Token:-{dis_token}</h3>
            </div>
        </BodyWrapper>

    ):handleLogin()
};

export default Login;
