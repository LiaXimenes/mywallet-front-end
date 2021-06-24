import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../context/UserContext';

export default function NewEntrance(){
    const {user} = useContext(UserContext);

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    let history = useHistory();

    const body = {
        amount: amount*(-100),
        description
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${user}`
        }
    }

    function postExit(){
        const request = axios.post("http://localhost:4000/amount", body, config);
        request.then(() => history.push("/main-page"));
        request.catch((response) => {console.log(response); setDescription(""); setAmount("")})
    }

    return(
        <Background>
            <Spacing>
                <h1>Nova Saída</h1>

                <input type="text" placeholder="Valor" onChange={(e) => setAmount(e.target.value)} value={amount}/>
                <input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} />

                <button onClick={postExit}>Salvar saída</button>
            </Spacing>
        </Background>
    )
}

const Background = styled.div`
    @media (max-width: 500px){
        width:100%;
        height:600px;
        background: #8C11BE;
        display: flex;
        justify-content: center;
    }
`;

const Spacing = styled.div`
    @media (max-width: 500px){
        padding-top: 30px;
        display: flex;
        flex-direction: column;

        h1{
            font-size: 22px;
            line-height: 30px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            color: #fff;
            margin-bottom: 35px;
        }

        input{
            width: 325px;
            height: 55px;
            border-radius: 5px;
            font-size: 20px;
            font-family: 'Raleway', sans-serif;
            margin-bottom: 15px;
            padding-left:10px;
        }

        button{
            width: 335px;
            height: 45px;
            border-radius: 5px;
            font-size: 20px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            color: #fff;
            background: #A328D6;
        }
    }
`;