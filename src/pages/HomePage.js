import React from 'react';
import Particles from '../components/Particles';
import TypedText from '../components/TypedText';
import Footer from '../components/Footer';
// import mouseTrack from '../utils/mousetrack';
import DocumentMeta from 'react-document-meta';
// import meta from '../data/pageMeta';
import NameHeader from '../components/NameHeader';
import SocialLinks from '../components/SocialLinks';
import SocialLinksWrapper from '../components/SocialLinkWrapper';
import Nav from '../components/Nav';
import MobileHeader from '../components/MobileHeader';


class HomePage extends React.Component {

  // componentDidMount() {
  //   mouseTrack('particle-container');
  // };

  render() {
    return (
      <div className="main-grid" id="container">
        {/* <DocumentMeta {...meta.homePage} /> */}
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

        <div className="particle-container" id="particle-container">
          <Particles />
        </div>

        <Footer />

      </div>
    )
  }
}

export default HomePage;
