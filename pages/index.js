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
          <TitleWrapper>
            <Logo src='/static/SRAM-LOGO.png' alt='SRAM LOGO' />
            <TitleContainer>
              <PageTitle>SARM</PageTitle>
              <PageSubtitle>Service d'aide à la répartition médicale</PageSubtitle>
            </TitleContainer>
            {/* <PageTitleCovid>- COVID</PageTitleCovid> */}
          </TitleWrapper>
          <Paragraph>
            Face à l’épidémie de Covid-19, vous souhaitez vous porter volontaire ?
             Cette plateforme vous permet de vous inscrire. Nous coordonnons ensuite
             la répartition des volontaires dans les différents établissements.
          </Paragraph>
          <Link1>JE PARTAGE L'INITIATIVE</Link1>
        </HeroSection>

        <Section1>
          <Section1Left>
            <Section1TitleContainer>
              <Section1Arrow src='/static/Arrow.png' alt='arrow' />
              <Section1Title>Je suis volontaire </Section1Title>
            </Section1TitleContainer>
            <Section1Description>Je suis médecin, infirmier-ère, …. et je souhaite me porter volontaire pour faire face à l’épidémie  de Covid-19 :</Section1Description>
            <Section1Item>- J’indique mes disponibilités</Section1Item>
            <Section1Item>- Je renseigne mes coordonnées</Section1Item>
            <Section1Item>- Je précise mes compétences </Section1Item>
            <Section1LinkContainer>
              <Section1Link1>
                <Link href="#0"><Lync1>Comment ça marche ?</Lync1></Link>
              </Section1Link1>
              <Section1Link1>
                <Link href="/volontaires"><Lync2>Se porter volontaire</Lync2></Link>
              </Section1Link1>
            </Section1LinkContainer>
          </Section1Left>


          <Section1Right>
            <Section1TitleContainer>
              <Section1Arrow src='/static/Arrow.png' alt='arrow' />
              <Section1Title>J’ai besoin de renfort  </Section1Title>
            </Section1TitleContainer>
            <Section1Description>Je suis un établissement de santé, un chef de service et je recherche des volontaires :</Section1Description>
            <Section1Item>- Je m’inscris</Section1Item>
            <Section1Item>- J’accède à la liste des volontaires</Section1Item>
            <Section1LinkContainer>
              <Section1Link1>
                <Link href="#0"><Lync1>Comment ça marche ?</Lync1></Link>
              </Section1Link1>
              <Section1Link1>
                <Link href="/demandeurs"><Lync2>S'inscrire</Lync2></Link>
              </Section1Link1>
            </Section1LinkContainer>
          </Section1Right>
        </Section1>


        <Partenaires>
          <ImagePartenaire src='/static/Partenaire1.png' alt='partenaire' />
          <ImagePartenaire src='/static/Partenaire2.png' alt='partenaire' />
          <ImagePartenaire src='/static/Partenaire4.png' alt='partenaire' />
          <ImagePartenaire src='/static/Partenaire3.png' alt='partenaire' />
        </Partenaires>

        <Footer></Footer>

      </PageContainer>
    );
  }
}


export default mainPage;

const PageContainer = styled.div`
width: 100vw;
`

const HeroSection = styled.div`
width: 100%;
padding: 10px;
height: 245px;
display: flex;
flex-direction: column;
@media (max-width: 768px){
  height: 350px;
}
`

const TitleWrapper = styled.div`
display: flex;
align-items: flex-start;
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
const PageTitleCovid = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 35px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #4a4a4a;
`
const Paragraph = styled.p`
width: 100%;
font-family: 'Roboto', sans-serif;
font-size: 19.2px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #8c8c8c;
@media (max-width: 768px){
  margin-top: 40px;
}
`

const Link1 = styled.a`
align-self: center;
font-family: 'Roboto', sans-serif;
font-size: 19.2px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #8c8c8c;
text-align: center;
margin-top: 50px;
cursor: pointer;
@media (max-width: 768px){
  margin-top: 20px;
}
`
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

const Section1 = styled.div`
width: 100%;
display: flex;
@media (max-width: 768px){
  flex-direction: column;
}
`
const Section1Left = styled.div`
width: 65%;
height: 500px;
background-color: #00155d;
display: flex;
flex-direction: column;
padding: 30px;
position: relative;
@media (max-width: 768px){
  width: 100%;
  padding-right: 0;

}
`
const Section1Right = styled.div`
width: 35%;
height: 500px;
background-color: #b15201;
display: flex;
flex-direction: column;
padding: 30px;
position: relative;
@media (max-width: 768px){
  width: 100%;
  padding-right: 0;
}
`

const Section1TitleContainer = styled.div`
display: flex;
align-items: center;
`
const Section1Arrow = styled.img`
width: 40px;
`
const Section1Title = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 21px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #ffffff;
margin-left: 20px;

`
const Section1Description = styled.h3`  
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #ffffff;
width: 90%;
`

const Section1Item = styled.h4`  
font-family: 'Roboto', sans-serif;
font-size: 18px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #ffffff;
margin-left: 30px;
`

const Section1LinkContainer = styled.div`
display: flex;
align-items: center;
align-self: flex-end;
justify-self: flex-end;
position: absolute;
bottom: 40px; 
right: 40px;
`
const Section1Link1 = styled.div`
`
const Section1Link2 = styled.div`
`

const Lync1 = styled.a`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #ffffff;
text-decoration: underline;
cursor: pointer;
`

const Lync2 = styled.a`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #ffffff;
border: 4px solid #ffffff; 
padding: 10px;
margin-left: 40px;
cursor: pointer;
text-decoration: none;
:hover{
  background-color: #ffffff;
  color: #00155d;
}
`

// ---------------------------------------

const Footer = styled.footer`
width: 100%;
height: 100px;
background-color: #333333;
`

const Partenaires = styled.div`
width: 80%;
margin: 0 10%;
display: flex;
justify-content: space-between;
padding: 50px 0;
@media (max-width: 768px){
  flex-direction: column;
}
`

const ImagePartenaire = styled.img``