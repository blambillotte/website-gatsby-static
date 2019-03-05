import React from "react"
import fontawesome from '@fortawesome/fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faHome, faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faGithub, faLinkedin, faInstagram, faHome, faCode, faBars, faTimes);


export default () => <div>Hello world!</div>
