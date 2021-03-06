import React from 'react';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import Nav from '../components/Nav';
import NameHeader from '../components/NameHeader';
import PortfolioItems from '../components/PortfolioItems';
import SocialLinkWrapper from '../components/SocialLinkWrapper';
import MobileHeader from '../components/MobileHeader';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false
    };
  }

  handleClick(e) {
    ReactGA.event({
      category: 'Link',
      action: `Clicked link ${e.target.parentNode.title}`
    });
  }

  render() {
    return (
      <div className="main-grid" id="container">
        <NameHeader />
        <SocialLinkWrapper />
        <Nav />
        <MobileHeader />
        <PortfolioItems />
        <Footer />
      </div>
    );
  }
}

export default PortfolioPage;
