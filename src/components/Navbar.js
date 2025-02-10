import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/gymaktiv1.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '100px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '41px' }} />
    </Link>
    <Stack
      direction="row"
      gap="20px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #063970' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #063970'  }}>Exercises</a>
      <a href="#contact" style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #063970'  }}>Contact Us</a>
    </Stack>
  </Stack>
);

export default Navbar;
