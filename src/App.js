import React from 'react';
import { ReactComponent as  IconLinkedin} from './assets/icons/linkedin.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";
import image from '../src/assets/images/datadios_logo.png';


class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
          <img src={image} alt="Not found" height={100} className="center"/>
          </div>    
        </div>
        <br></br><br></br><br></br>
        <div className="content">
          <div className="title-holder">
            <h1>Great things coming <pre>soon.</pre></h1>
            <br></br>
            <h2>A Data Team with big Ideas</h2>
          </div>
          <a href="mailto:thedatastartup@gmail.com">
            <div className="cta">Contact Us</div>
          </a>
        </div>
        <br></br><br></br><br></br>
        <div className="footer">
          <div className="social">
            <a href="https://www.linkedin.com/company/datadios/about/" title="Linkedin" target="_blank" rel="noopener noreferrer">
            <IconLinkedin className="icon" aria-hidden="true" />
             </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" aria-hidden="true" />
            </a>
            <a href="https://github.com/" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>        
          </div>
      </div>
    );
  }
}

export default App;