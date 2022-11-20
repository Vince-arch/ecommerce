import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from '../responsive'


const Container = styled.div`
  flex:1;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column"})}
 `;

const ImgContainer= styled.div`
flex: 1;
`;
const Image = styled.img`
width: 80%;
height: 90vh;
object-fit: cover;
${mobile({ height: "60vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding:0px 50px;
  ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;


const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%"})}
  `;

const AmountContainer = styled.div `
  display: flex;
  align-items: center;
  font-weight: 700;

`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid gray;
  background-color: light gray;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: gray;
  }
`;

 

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/big-bang-mp-09-tourbillon-bi-axis-3d-carbon-45-mm-909.QD.1120.RX-soldier-shot.png?itok=e8mKYtSU"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Hublot</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Animi, nam dolores obcaecati optio quibusdam dicta pariatur 
                officiis ullam officia error. Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Libero, ipsam.</Desc>
                <Price>Ksh 500,000</Price>
                <AddContainer>
                  <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
                  </AmountContainer>
                  <Button> ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
                </Wrapper>
         <Newsletter/>
        <Footer/>
      </Container>
    
    
  )
}

export default Product