import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const AnimateNavLink = (props) => {
  return (
    <Wrapper>
      <PlaceholderNavLink {...props} />
      <TopNavLink {...props} />
      <BottomNavLink {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  transition: transform 300ms;

  ${Wrapper}:first-of-type & {
    color: var(--color-secondary);
  }

  ${Wrapper}:hover & {
    transform: translateY(-100%);
  }
`;

const PlaceholderNavLink = styled(NavLink)`
  visibility: hidden;
`;

const TopNavLink = styled(NavLink)`
  position: absolute;
  top: 0;
  left: 0;
`;

const BottomNavLink = styled(NavLink)`
  position: absolute;
  top: 100%;
  left: 0;
  font-weight: ${WEIGHTS.bold};
`;

export default AnimateNavLink;
