import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ContentContainer from '../components/ContentContainer';
import PortfolioItem from '../components/PortfolioItem';

const PortfolioItemS = props => {
  const portfolioData = useStaticQuery(graphql`
    query {
      allPortfolioListingJson {
        edges {
          node {
            imgSrc
            imgAlt
            title
            description
            linkUrl
            linkTitle
          }
        }
      }
    }
  `);

  const { allPortfolioListingJson: { edges: data }  } = portfolioData;
  if (!data) return null;
    console.log(data);
  return (
    <ContentContainer
    content={data.map((data, i) => (
      <PortfolioItem key={i} data={data.node} />
    ))}/>
  );
}

export default PortfolioItemS;
