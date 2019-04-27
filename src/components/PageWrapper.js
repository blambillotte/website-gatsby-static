import React from 'react';
// import DocumentMeta from 'react-document-meta';
import fontawesome from '@fortawesome/fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faHome, faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faGithub, faLinkedin, faInstagram, faHome, faCode, faBars, faTimes);

const PageWrapper = ({children}) => (
  <div id="root">
    {/* <DocumentMeta {...meta.homePage} /> */}
    {children}
  </div>
);

export default PageWrapper;