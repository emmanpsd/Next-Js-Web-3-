import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav.js'

export default function Homepage() {
  return (
    <Container>
    <Nav />
    <Main>
    <img src="https://gcdnb.pbrd.co/images/otj9wzDVxfpS.png?o=1" />
    </Main>
    <Grid>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    </Grid>
    <Main>
    <img src="https://gcdnb.pbrd.co/images/lRGTI870k0wA.png?o=1" />
    </Main>
   <Grid>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    <GridWork><img src="#" /><button>mint for .01 ETH</button></GridWork>
    </Grid>
    <Footer>
    <FooterColumn>
    <img src ="" />
    <img src ="" />
    <img src ="" />
    </FooterColumn>
    <p> © COPYRIGHT 2022, <strong><a href="https://twitter.com/emmansamusa/">@emmansamusa</a></strong>. ALL RIGHTS RESERVED.</p>
    </Footer>
  
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
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

`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  background-color: black;

`;
const Main = styled.div`
  background-color:  black;

  display: flex;
  margin-top: 60px;
  padding-bottom: 60px;
  
  
  img{
    width: 90%;
    height: 110%;
    margin: 0 auto;
  }
`;
const Grid = styled.div`
  background-color:  black;
  color: white;
  display: flex;
  
  margin-top: 60px;
  padding-bottom: 60px;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  
  
  img{
  margin-left: 5px;
  margin-right: 5px;
  background-color: white;
  height: 20em;
  width: 20em;
  }
`;
const GridWork = styled.div  `
  display: grid;
 
 
  button{
    
    margin: 0 auto;
    margin-top: 20px;
    background: black;
    border: none;
    padding:  13px 40px;
    color: white;
    border-radius: 20px;
    border: 2px solid white;
    width: 90%;
  }
  `
const Footer = styled.div `
  background: black;
  margin-top: 60px;
  padding-bottom: 60px;
  color: white;
  text-align: center;
    a:hover:after {
    
}
  `
const FooterColumn = styled.div `
  justify-content: space-between;
  
  
  img{
    margin-left: 5px;
    margin-right: 5px;
     background-color: white;
  height: 3em;
  width: 3em;
  }
  a{
    
  }

  `