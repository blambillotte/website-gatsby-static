import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga';


const SocialLinks = () => (

      <div className="links-flex">

        <ReactGA.OutboundLink
          eventLabel="My Github Page"
          to="https://github.com/blambillotte"
          target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </ReactGA.OutboundLink>

        <ReactGA.OutboundLink
          eventLabel="My Linkedin Page"
          to="https://www.linkedin.com/in/benlambillotte/"
          target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </ReactGA.OutboundLink>

        <ReactGA.OutboundLink
          eventLabel="My Instagram"
          to="https://www.instagram.com/blambillotte/"
          target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </ReactGA.OutboundLink>

      </div>

);

export default SocialLinks;
