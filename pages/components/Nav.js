import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from "react";


export default function Nav() {

   useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    //Button ID
    const connectButton = document.getElementById("connect");

    //Click Event
    connectButton.addEventListener("click", () => {
      connectAccount();
    });

    //Connect Account Function
    async function connectAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      connectButton.innerHTML =
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
    }
  }, []);


  
  return (
    <Container>
      <NavBar>
    <div>
        <Left>
        <img src="https://gcdnb.pbrd.co/images/oCqeAuGiUpup.png?o=1"></img>
        </Left>
    </div>
    <Menu>
        <Right>
        
           
          <a target="#"><button id="connect">connect with <strong>metamask</strong></button></a>
           
          
        </Right>
    </Menu>
    </NavBar>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;;
  `
const Menu = styled.div`

`;
const Left = styled.div`
img {
  padding-top: 20px;
  padding-bottom: 10px;
  height: 80px;
}
  
`;
const Right = styled.a`
 font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  color: #aaaaaa;
  button{
    font-size: 16px;
    border: none;
  padding: 13px 40px;
    background-color: #FE6F00;
    color: white;
    font-weight: 100;
    border-radius: 15px;
}
  p{
    margin-top: 8px;
    color: white;
    font-size: 18px;
    padding-right: 10px;
  }
a{
padding-top: 20px;
padding-left: 20px;
}
button:hover{
    cursor: pointer;
  }

`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  background-color: black;

`;