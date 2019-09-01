import React from 'react';

import {Container, Logo} from './styles';
import logo from '~/assets/logo.png';

export default function Topbar() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
