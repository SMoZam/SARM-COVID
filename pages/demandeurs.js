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
                            <Logo src='/static/images/SRAM-LOGO.png' alt='SRAM LOGO' />
                            <TitleContainer>
                                <PageTitle>SARM</PageTitle>
                                <PageSubtitle>Service d'aide à la répartition médicale</PageSubtitle>
                            </TitleContainer>
                            {/* <PageTitleCovid>- COVID</PageTitleCovid> */}
                        </TitleWrapper>


                    </Lync></Link>
                </HeroSection>

                <FrameContainer>
                    <Image
                        src={this.state.displayMobile ? '/static/images/mobile-background-referent.png' : '/static/images/background-referent.png'}
                        alt='aperçu covid univers'
                    />
                    <iframe src="https://airtable.com/embed/shrvaCq3dxHZeSFJh?backgroundColor=red"
                        style={{
                            className: "airtable-embed airtable-dynamic-height",
                            frameboder: "0",
                            background: "transparent",
                            border: "1px solid #ccc",
                            onmousewheel: "",
                            width: "100%",
                            height: "100%"
                        }}>
                    </iframe>
                </FrameContainer>

                <Footer>
                    <FooterParagraph> &copy; SARM - COVID19 Service d'aide à la répartition médicale</FooterParagraph>
                </Footer>

            </PageContainer>
        );
    }
}

export default mainPage;

const PageContainer = styled.div`
width: 100vw;
background-color: #b15201;
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
`
const FrameContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin: 0 10%;
height: 2400px;
@media (max-width: 768px){
width: 95%;
margin: 0 2.5%;
height: 2200px;

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

const Section1 = styled.div`
width: 90%;
margin: 0 5%;
`

const Image = styled.img`
width: 100%;
`

// ---------------------------------------

const Footer = styled.footer`
width: 100%;
height: 100px;
background-color: #333333;
display: flex;
justify-content: center;
align-items: center;
`

const FooterParagraph = styled.p`
/* width: 100%; */
font-family: 'Roboto', sans-serif;
font-size: 19.2px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #8c8c8c;
`

// ---------------------------------------