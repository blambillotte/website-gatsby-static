import React from 'react';

const PortfolioItem = props => (
  <div className="portfolio-item">
    <div className="portfolio-img">
      <img src={props.data.imgSrc} alt={props.data.imgAlt} />
    </div>
    <div className="portfolio-content">
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
      <a
        className="btn"
        href={props.data.linkUrl}
        title={props.data.linkTitle}
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    </div>
  </div>
);

export default PortfolioItem;
