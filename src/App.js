import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
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
        <div className="content">
          <div className="title-holder">
            <h1>Great things coming <pre>soon.</pre></h1>
            <h2>We are a small and growing data firm with big ideas.</h2>
          </div>
          <a href="mailto:thedatastartup@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/datadios/datadios_website_frontend" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>        
          </div>
      </div>
    );
  }
}

export default App;