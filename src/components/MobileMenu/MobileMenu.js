/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent, Dialog } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss} aria-label="Dismiss menu">
          <Icon id="close"></Icon>
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.8);
`;

const Content = styled(DialogContent)`
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  height: 100%;
  background: white;
  width: 80vw;
  position: absolute;
  right: 0;
`;

const DismissButton = styled.button`
  align-self: flex-end;
  display: block;
  padding-top: 16px;
  padding-right: 16px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const NavLink = styled.a`
  text-transform: uppercase;
  color: black;
  display: block;
  text-decoration: none;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 12px;
`;

const FooterLink = styled.a`
  color: gray;
  text-decoration: none;
`;

export default MobileMenu;
