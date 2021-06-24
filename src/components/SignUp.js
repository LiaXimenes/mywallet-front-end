import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let history = useHistory();

    const body = {
        name,
        email,
        password
    }

    function goToLogIn(){
        if(password === confirmPassword){
            const request = axios.post("http://localhost:4000/sign-up", body);
            request.then(() => history.push("/"));
            request.catch(() => {setPassword(""); setEmail(""); setConfirmPassword(""); setName("")})

        } else {
            alert("Confirmar senha não é o mesmo de senha")
        }
    }


    return(
        <FrontPage>
            <h1>MyWallet</h1>

            <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value = {name} />
            <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value = {email} />
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value = {password} />
            <input type="password" placeholder="Confirmar a senha" onChange={(e) => setConfirmPassword(e.target.value)} value = {confirmPassword} />

            <button onClick={goToLogIn}>Cadastrar</button>

            <Link to="/">
                <p>Já possui cadastro? Entre agora!</p>
            </Link>
        </FrontPage>
    )
}

const FrontPage = styled.div` 
    @media (max-width: 500px){
        width:100%;
        height: 600px;
        background: #8C11BE;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1{
            font-size:32px;
            line-height:50px;
            font-family: 'Saira Stencil One', cursive;
            color: #fff;
            margin-bottom: 30px;
        }

        input{
            width: 325px;
            height:55px;
            border-radius:5px;
            margin-bottom:10px;
            padding-left: 10px;
            font-size: 20px;
            color: black;
        }

        button{
            width: 335px;
            height:45px;
            background: #A328D6;
            margin-bottom:15px;
            border-radius:5px;
            color: #fff;
            font-size: 20px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
        }

        p{
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
        }
    }
`