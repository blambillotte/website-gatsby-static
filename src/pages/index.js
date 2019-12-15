import React from 'react';
import PageWrapper from '../components/PageWrapper';
// import Particles from '../components/Particles';
import TypedText from '../components/TypedText';
import Footer from '../components/Footer';
import NameHeader from '../components/NameHeader';
import SocialLinks from '../components/SocialLinks';
import SocialLinksWrapper from '../components/SocialLinkWrapper';
import Nav from '../components/Nav';
import MobileHeader from '../components/MobileHeader';

class HomePage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <div className="main-grid" id="container">
          <NameHeader />
          <SocialLinksWrapper />
          <Nav />
          <MobileHeader />

          <div className="home-content-container">
            <div className="typewriter">
              <TypedText />
            </div>

            <div className="mobile-social">
              <SocialLinks />
            </div>
          </div>
{/* 
          <div className="particle-container" id="particle-container">
            <Particles />
          </div> */}

          <Footer />
        </div>
      </PageWrapper>
    );
  }
}

export default HomePage;
