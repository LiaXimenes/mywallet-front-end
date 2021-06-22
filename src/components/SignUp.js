import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

export default function SignUp(){
    return(
        <FrontPage>
            <h1>MyWallet</h1>

            <input type="text" placeholder="Nome"></input>
            <input type="text" placeholder="E-mail"></input>
            <input type="password" placeholder="Senha"></input>
            <input type="password" placeholder="Confirmar a senha"></input>

            <button>Cadastrar</button>

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