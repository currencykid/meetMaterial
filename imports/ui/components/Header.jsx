import React from 'react';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
            </ul>
          </div>
      </nav>

      </div>
    );
  }
}
