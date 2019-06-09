import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const FooterBar = styled.div`
    background-image: url('imgs/footerimg.jpg');
    position: relative;
    opacity: 0.7;
    /* background-attachment: fixed; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20vh;
    width: 100vw;
    padding: 15px;

    .kp-link {
        color: #777;
        height: 5vh;
        width: auto;
        margin: 5px;
    }
    .btns {
        color: pink
    }
`

const Footer = (props)=>{
    return(

        <FooterBar>
            <p>Copyright © Cactus Tour 2019. All Rights Reserved.</p>
            <p>Site by parKaitlin</p>
            <div className="kp-links">
            <a href="https://github.com/parkaitlin"><FontAwesomeIcon icon={faGithubSquare} className="kp-link" /></a>          
            <a href="https://www.linkedin.com/in/parkaitlin/"><FontAwesomeIcon icon={faLinkedin} className="kp-link" /></a>      
            </div>
        </FooterBar>
    )
}

export default Footer;