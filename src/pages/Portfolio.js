import React from 'react';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';
import DocumentMeta from 'react-document-meta';
// import meta from '../data/pageMeta';
import Nav from '../components/Nav';
import NameHeader from '../components/NameHeader';
import ContentContainer from '../components/ContentContainer';
import PortfolioItem from '../components/PortfolioItem';
import portfolioData from '../data/portfolio-items';
import SocialLinkWrapper from '../components/SocialLinkWrapper';
import MobileHeader from '../components/MobileHeader';


class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false,
    }
  };

  handleClick(e) {
    ReactGA.event({
      category: 'Link',
      action: `Clicked link ${e.target.parentNode.title}`
    });
  };

  componentDidMount() {
  };


  render() {
    return (
      <div className="main-grid" id="container">
        {/* <DocumentMeta {...meta.portfolio} /> */}
        <NameHeader />
        <SocialLinkWrapper />
        <Nav />
        <MobileHeader />

        <ContentContainer
          content={portfolioData.map((data, i) =>
            <PortfolioItem key={i} data={data} />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default PortfolioPage;
