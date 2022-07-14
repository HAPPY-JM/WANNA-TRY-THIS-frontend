import React from 'react'
import styled from "styled-components";

const Footer = () => {

   const FooterStyle = styled.footer`
        width: 100%;
        height: 80px;
        bottom: 0px;
        position: absolute;
    `

    return (
        <FooterStyle>
            <nav>
                <span>Creater : busan 5team</span>
                <span>Copyright 2022...</span>
            </nav>
         </FooterStyle>
    )
}

export default Footer;