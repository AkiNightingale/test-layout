import { Menu } from './components';
import React from 'react';
import './header.scss';
import { Stack } from 'ui-kit';
import { logo, menu } from '../../../assets';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='logo' />

      <Stack
        className='header_stackCustom'
        direction='row'
        justifyContent='space-between'
      >
        <button className='header_stackCustom__button'>
          <span className='header_stackCustom__button-text'>Home</span>
        </button>

        <button className='header_stackCustom__button'>
          <span className='header_stackCustom__button-text'>Products</span>
        </button>

        <span className='header_stackCustom__bucket-icon' />
      </Stack>

      <img
        src={menu}
        className='header__menu-icon'
        alt='menu-icon'
        onClick={toggleMenu}
      />

      <Menu isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;