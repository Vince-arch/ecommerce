import styled from "styled-components"
import React from 'react'
import { Facebook, Instagram, MailOutline, PhoneAndroid, Room, Twitter } from "@material-ui/icons";
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee"})}
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 40%;
    margin-top:0;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>WAKATI</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptatibus, exercitationem officia. Fugiat iste deleniti explicabo, 
                 omnis eum libero animi nihil.
            </Desc>
            <SocialContainer>
                <SocialIcon color="305999">
                    <Facebook/>
                </SocialIcon >  
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>  
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>  
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room style={{marginRight: "10px"}}/>  Nairobi, Kenya
              </ContactItem>
            <ContactItem>
                <PhoneAndroid style={{marginRight: "10px"}}/>  +254798654321
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/> wakati@gmail.com
            </ContactItem>
            <Payment src="https://www.rhwallpapers.co.ke/wp-content/uploads/2019/10/payment-icon-3.png" />
        </Right>
    </Container>
  )
}

export default Footer