import styled from 'styled-components';
import { useHistory } from "react-router-dom";

export default function NewEntrance(){
    return(
        <Background>
            <Spacing>
                <h1>Nova Entrada</h1>

                <input type="text" placeholder="Valor"/>
                <input type="text" placeholder="Descrição"/>

                <button>Salvar Entrada</button>
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