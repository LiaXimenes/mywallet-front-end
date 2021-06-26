import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import UserContext from '../context/UserContext';


export default function MainPage(){
    const [bankInfos, setBankInfos] = useState([]);
    const [totalAmount, setTotalAmount] = useState("");

    const {user} = useContext(UserContext);

    let history = useHistory();
    let arrayOfAmounts = [];
    let total= 0;



    const config = {
        headers: {
            "Authorization": `Bearer ${user}`
        }
    }

    
    useEffect(() => {
        if(bankInfos){
            for(let i of bankInfos){
                arrayOfAmounts.push(i.amount)
            }
    
            for(let i = 0; i < arrayOfAmounts.length; i++){
                let amount = parseInt(arrayOfAmounts[i])
                total += amount;
            }
            setTotalAmount(total)
            console.log(arrayOfAmounts)
        }
    }, [arrayOfAmounts])

    useEffect(() => {
        const request = axios.get("http://localhost:4000/amount", config);
        request.then((response) => {console.log(response.data); setBankInfos(response.data)});
        request.catch()
    }, [])

    function exitApp(){
        localStorage.removeItem('list');
        history.push("/");
    }

    return(
        <Background>
            <Header>
                <h1>Olá, User!</h1>
                <span onClick={exitApp}>
                    <IoExitOutline size="2em" color="white"/>
                </span>
            </Header>
            
            <Whitediv>
                <List>
                    {bankInfos.map(info => 
                    <li><span>{info.date}</span> {info.description} <ColoredAmount colour={info.amount}> {info.amount/100} </ColoredAmount></li> 
                    )}
                    
                </List>
                
                <Balance>
                    <p>SALDO</p><ColoredTotalAmount colour={totalAmount}>{totalAmount/100}</ColoredTotalAmount>
                </Balance>
            </Whitediv>

            <Options>
                <Link to="/entrance">
                    <NewEnt>
                        <AiOutlinePlusCircle size="1.5em" color="white"/>
                        
                        <p>Nova <br/> entrada</p>
                    </NewEnt>
                </Link>
                
                <Link to="/exit">
                    <NewExi>
                        <AiOutlineMinusCircle size="1.5em" color="white"/>
                        <p>Nova <br/> saída</p>
                    </NewExi>
                </Link>
            </Options>
        </Background>
    )
}

const Background = styled.div`
    @media (max-width: 500px){
        width:100%;
        height: 700px;
        background: #8C11BE;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Header = styled.div`
    @media (max-width: 500px){
        width: 325px;
        padding-top: 25px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;

        h1{
            font-size:26px;
            font-family: 'Raleway', sans-serif;
            font-weight: 700;
            color: #fff;
        }
    }  
`;

const Whitediv = styled.div`
    @media (max-width: 500px){
        width: 325px;
        height: 445px;
        background: #fff;
        border-radius: 5px;
        padding-left: 10px;
    }
`;

const List = styled.div`
    @media (max-width: 500px){
        width: 325px;
        height: 410px;
        display: flex;
        flex-direction: column;
        overflow: scroll;

        li{
            padding-top: 15px;
            margin-right: 10px;
            font-size:16px;
            font-family: 'Raleway', sans-serif;
            color: #000;
            display: flex;
            flex-direction: row;
            position: relative;

            span{
                color: #C6C6C6;
                padding-right: 10px;
                
            }
        }
    }
`;

const ColoredAmount = styled.p`
    color: ${props => (props.colour > 0 ? "#03AC00" : "#C70000")};
    position: absolute;
    right: 0;
`;

const Balance = styled.div`
    @media (max-width: 500px){
        width: 325px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        p{
            padding-top: 10px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
            font-size: 17px;
        }
    }
`;

const ColoredTotalAmount = styled.p`
    padding-top: 10px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    padding-right: 10px;
    color:${props => (props.colour > 0 ? "#03AC00" : "#C70000")};
`;

const Options = styled.div`
    @media (max-width: 500px){
        margin-top: 20px;
        width: 325px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const NewEnt = styled.div`
    @media (max-width: 500px){
        background: #A328D6;
        width: 145px;
        height: 115px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 0px 10px 10px;
        margin-right:15px;

        p{
            color:#fff;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
            font-size: 17px;
        }
    }
`;

const NewExi = styled.div`
    @media (max-width: 500px){
        background: #A328D6;
        width: 155px;
        height: 115px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 0px 10px 5px;

        p{
            color:#fff;
            padding-left: 10px;
            font-weight: 700;
            font-family: 'Raleway', sans-serif;
            font-size: 17px;
        }
    }
`;