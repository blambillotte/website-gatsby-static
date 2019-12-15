import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import DocumentMeta from 'react-document-meta';
import fontawesome from '@fortawesome/fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faHome, faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faGithub, faLinkedin, faInstagram, faHome, faCode, faBars, faTimes);

const PageWrapper = ({children}) => {
  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <div id="root">
      <DocumentMeta {...meta.site.siteMeta} />
      {children}
    </div>
  );
}


export default PageWrapper;