import React, { Component } from 'react';
import styled from "styled-components";
import Link from 'next/link'

class mainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        //
        if (typeof window !== 'undefined') {
            const script = document.createElement("script");

            script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js";
            script.async = true;

            document.body.appendChild(script);
        }
    }

    resize() {
        this.setState({ displayMobile: window.innerWidth <= 760 });
    }



    render() {
        return (
            <PageContainer>
                <HeroSection>
                    <Link href="/"><Lync style={{ textDecoration: 'none' }}>
                        <TitleWrapper>
                            <Logo src='/static/SRAM-LOGO.png' alt='SRAM LOGO' />
                            <TitleContainer>
                                <PageTitle>SARM</PageTitle>
                                <PageSubtitle>Service d'aide à la répartition médicale</PageSubtitle>
                            </TitleContainer>
                            {/* <PageTitleCovid>- COVID</PageTitleCovid> */}
                        </TitleWrapper>
                    </Lync></Link>
                </HeroSection>

                <FrameContainer>

                </FrameContainer>

            </PageContainer>
        );
    }
}

export default mainPage;

const PageContainer = styled.div`
width: 100vw;
background-color: #b15201;
overflow: hidden;
`
const FrameContainer = styled.div`
display: flex;
justify-content: center;
width: 80%;
margin: 0 10%;
height: 1700px;
@media (max-width: 768px){
width: 95%;
margin: 0 2.5%;
height: 1850px;
}
`
const HeroSection = styled.div`
width: 100%;
padding: 10px;
height: 100px;
display: flex;
flex-direction: column;
background-color: white;
@media (max-width: 768px){
  height: 150px;
}
`

const TitleWrapper = styled.div`
display: flex;
align-items: flex-start;
`
const Lync = styled.a`
display: flex;
align-items: flex-start;
cursor: pointer;
`

const TitleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-left: 10px;
`
const Logo = styled.img`
width: 75px;
height: 75px;
`
const PageTitle = styled.h1`
font-family: 'Roboto', sans-serif;
font-size: 48px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #4a4a4a;
margin: 0;
`

const PageSubtitle = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 15px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #4a4a4a;
margin: 0;
`