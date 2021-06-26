import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import UserContext from '../context/UserContext';

export default function Login(){
    const {user, setUser} = useContext(UserContext);

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");

    let history = useHistory();

    useEffect(() => {
        if (localStorage.length !== 0){
            const listString = localStorage.getItem("list");
            const list = JSON.parse(listString);
            setUser(list)
            console.log(list)
            history.push("/main-page")
        }
    }, [])

    const body = {
        password,
        email
    }

    function goToMainPage(){
        const request = axios.post("http://localhost:4000/log-in", body);
        request.then((response) => {setUser(response.data);

            const tokenString = JSON.stringify(user);
            localStorage.setItem('list', tokenString);
            console.log(localStorage.getItem('list'))
            history.push("/main-page");
        });
        request.catch((errors))

        function errors(error){
            if(error.response.status === 401){
                alert("Email ou senha invalidos")
            }
            setPassword(""); setEmail("")

        }
    }

    return(
        <FrontPage>
            <h1>MyWallet</h1>

            <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value = {email} />
            <input type="password" placeholder="Senha" onChange = {(e) => setPassword(e.target.value)} value = {password}/>

            <button onClick = {goToMainPage} >Entrar</button>

            <Link to="/sign-up">
                <p>Primeira vez aqui? Cadastre-se!</p>
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
        align-items:center;
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