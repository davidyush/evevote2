import React from 'react'
import { Link } from 'react-router-dom'

import { css } from 'aphrodite/no-important'
import header from '../../styles/header_styl.js'

const Header = (props) => (
  <div className={css(header.containerHeader)}>
    <header className={css(header.header)}>
      <Link className={css(header.logo)} to='/'></Link>
      <ul className={css(header.navLinks)}>
        <li>
          <Link className={css(header.navLink)} to='/explore'>Explore</Link>
        </li>
        <li>
          <Link className={css(header.navLink)} to='/vk'>VK</Link>
        </li>
        <li>
          <Link className={css(header.navLink)} to='/marvel'>Marvel</Link>
        </li>
        <li>
          <Link className={css(header.navLink)} to='/custom'>Custom</Link>
        </li>
      </ul>
    </header>
  </div>
);

export default Header
